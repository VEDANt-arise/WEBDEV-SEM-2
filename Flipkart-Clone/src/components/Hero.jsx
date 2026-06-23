function Hero() {
  function handleBannerClick() {
    alert("🎉 Big Billion Days Sale is Live!\nUp to 80% OFF on Electronics & Fashion.");
  }

  return (
    <div className="hero">
      <img
        src="/images/heroImg.png"
        alt="Hero Banner"
        onClick={handleBannerClick}
        style={{
          cursor: "pointer",
          width: "100%",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default Hero;