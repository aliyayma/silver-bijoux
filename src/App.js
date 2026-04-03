import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Silver Necklace", price: 25, img: "https://via.placeholder.com/300" },
  { id: 2, name: "Silver Ring", price: 15, img: "https://via.placeholder.com/300" },
  { id: 3, name: "Silver Earrings", price: 20, img: "https://via.placeholder.com/300" },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20, background: "black", color: "white" }}>
        <h1>Silver Bijoux</h1>
        <div>
          <ShoppingCart />
          <span> {cart.length}</span>
        </div>
      </header>

      <section style={{ textAlign: "center", padding: 40 }}>
        <h2>Elegant Silver Accessories</h2>
        <p>Shine with our unique collection</p>
      </section>

      <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
        {products.map((p) => (
          <motion.div key={p.id} whileHover={{ scale: 1.05 }} style={{ background: "white", padding: 20 }}>
            <img src={p.img} width="200" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
