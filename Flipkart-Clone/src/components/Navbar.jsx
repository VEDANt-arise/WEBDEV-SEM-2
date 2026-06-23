import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount, search, setSearch }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    if (isLoggedIn) {
      alert("Logged Out Successfully!");
    } else {
      alert("Login Successful!");
    }

    setIsLoggedIn(!isLoggedIn);
  }

  function handleSearch() {
    if (search.trim() === "") {
      alert("Please enter a product name.");
      return;
    }

    alert(`Searching for "${search}"`);
  }

  function handleCart() {
    alert(`You have ${cartCount} item(s) in your cart.`);
  }

  function handleSeller() {
    alert("Seller Registration Coming Soon!");
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <img
        src="/images/flipkart-logo.png"
        alt="Flipkart Logo"
        className="logo"
        onClick={() => alert("Welcome to Flipkart Clone!")}
        style={{ cursor: "pointer" }}
      />

      {/* Search Box */}
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <FaSearch
          className="searchIcon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Login Button */}
      <button
        className="loginBtn"
        onClick={handleLogin}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {/* Seller */}
      <p
        onClick={handleSeller}
        style={{ cursor: "pointer" }}
      >
        Become a Seller
      </p>

      {/* Cart */}
      <div
        className="cart"
        onClick={handleCart}
        style={{ cursor: "pointer" }}
      >
        <FaShoppingCart />

        <span>Cart ({cartCount})</span>
      </div>
    </div>
  );
}

export default Navbar;