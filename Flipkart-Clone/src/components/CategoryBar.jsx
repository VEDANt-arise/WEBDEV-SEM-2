const categories = [
  "Grocery",
  "Mobiles",
  "Fashion",
  "Electronics",
  "Home",
  "Travel",
  "Toys",
];

function CategoryBar() {
  function handleCategory(category) {
    alert(`${category} category selected.`);
  }

  return (
    <div className="categoryBar">
      {categories.map((item, index) => (
        <div
          key={index}
          className="categoryItem"
          onClick={() => handleCategory(item)}
          style={{ cursor: "pointer" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;