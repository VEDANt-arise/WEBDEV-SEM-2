function ProductSection({
  title,
  items,
  search,
  addToCart,
  removeFromCart,
}) {

  function buyNow(name) {
    const confirmBuy = window.confirm(
      `Do you want to buy ${name}?`
    );

    if (confirmBuy) {
      alert(`🎉 Order Placed Successfully!\n\nProduct: ${name}`);
    }
  }

  function showDetails(item) {
    alert(
      `Product Details\n\nName: ${item.name}\nPrice: ₹${item.price}`
    );
  }

  const filteredProducts = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="productSection">

      <h2>{title}</h2>

      <div className="products">

        {filteredProducts.length === 0 ? (
          <h2>No Product Found 😔</h2>
        ) : (
          filteredProducts.map((item, index) => (
            <div className="productCard" key={index}>

              <img
                src={item.image}
                alt={item.name}
                onClick={() => showDetails(item)}
                style={{ cursor: "pointer" }}
              />

              <h3>{item.name}</h3>

              <h4>₹{item.price}</h4>

              <div className="buttonGroup">

                <button
                  className="cartBtn"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

                <button
                  className="removeBtn"
                  onClick={removeFromCart}
                >
                  Remove
                </button>

                <button
                  className="buyBtn"
                  onClick={() => buyNow(item.name)}
                >
                  Buy Now
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default ProductSection;