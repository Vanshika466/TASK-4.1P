import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const headerStyle = {
    width: "100%",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e0e0e0"
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    maxWidth: "1200px",
    margin: "0 auto"
  };

  const logoStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    textDecoration: "none"
  };

  const searchContainerStyle = {
    flex: "1",
    maxWidth: "600px",
    margin: "0 20px"
  };

  const searchInputStyle = {
    width: "100%",
    padding: "8px 15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    fontSize: "14px"
  };

  const signUpButtonStyle = {
    padding: "8px 20px",
    backgroundColor: "#008080",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px"
  };

  const bannerContainerStyle = {
    width: "100%",
    height: "300px", 
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const bannerImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  const bannerOverlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1
  };

  return (
    <header>
      {/* Navigation Bar */}
      <div style={headerStyle}>
        <nav style={navStyle}>
          <a href="/" style={logoStyle}>
            DEV@Deakin
          </a>
          
          <div style={searchContainerStyle}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={searchInputStyle}
            />
          </div>
          
          <div style={navLinksStyle}>
            <a href="/post" style={linkStyle}>Post</a>
            <a href="/login" style={linkStyle}>Login</a>
            <button style={signUpButtonStyle}>Sign Up</button>
          </div>
        </nav>
      </div>

      {/* Banner Image Section */}
      <div style={bannerContainerStyle}>
        <img 
          src="https://picsum.photos/1200/300"
          alt="Banner"
          style={bannerImageStyle}
        />
        <div style={bannerOverlayStyle}>
          {/* Add any overlay content if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;