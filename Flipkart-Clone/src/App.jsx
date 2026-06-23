import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";

import { sportsData, electronicsData } from "./data/products";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");

  function addToCart() {
    setCartCount((prev) => prev + 1);
    alert("Product Added to Cart");
  }

  function removeFromCart() {
    if (cartCount > 0) {
      setCartCount((prev) => prev - 1);
      alert("Product Removed");
    } else {
      alert("Cart is Empty");
    }
  }

  return (
    <>
      <Navbar
        cartCount={cartCount}
        search={search}
        setSearch={setSearch}
      />

      <CategoryBar />

      <Hero />

      <ProductSection
        title="Get Set for Sports"
        items={sportsData}
        search={search}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <ProductSection
        title="Best of Electronics"
        items={electronicsData}
        search={search}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <Footer />
    </>
  );
}

export default App;