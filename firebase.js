import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxq3ajPVT3QTzn5gxhx0pfBvN_UYI7SWA",
  authDomain: "silver-bijoux.firebaseapp.com",
  projectId: "silver-bijoux",
  storageBucket: "silver-bijoux.firebasestorage.app",
  messagingSenderId: "386142556876",
  appId: "1:386142556876:web:c717c8c5d04fa49cfda869",
  measurementId: "G-C9PBCMRN1L"
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
