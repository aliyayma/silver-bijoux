import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCo7gd-BGOoAMGxZKk-18JzB0gkMBVi4uY",
  authDomain: "silverbijoux-ebdd5.firebaseapp.com",
  projectId: "silverbijoux-ebdd5",
  storageBucket: "silverbijoux-ebdd5.firebasestorage.app",
  messagingSenderId: "480803054908",
  appId: "1:480803054908:web:2e19c0512d07091bd02a39",
  measurementId: "G-D2LKYQ3MN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.FirebaseDB = {
    // Fetches the entire array of items from a specific document 
    async getData(collectionName) {
        try {
            const docRef = doc(db, "storeData", collectionName);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data().items || [];
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error getting document:", error);
            return null;
        }
    },
    
    // Saves an array of items to a specific document
    async saveData(collectionName, itemsData) {
        try {
            const docRef = doc(db, "storeData", collectionName);
            await setDoc(docRef, { items: itemsData });
            return true;
        } catch (error) {
            console.error("Error saving document:", error);
            return false;
        }
    }
};

// Dispatch an event so Alpine knows it's ready to use FirebaseDB
document.dispatchEvent(new Event('firebase-ready'));
