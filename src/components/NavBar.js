import React from "react";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "10px", display: "flex", justifyContent: "center" }}>
      <a 
        href="#home" 
        style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}
        aria-label="Go to Home section"
      >
        Home
      </a>
      <a 
        href="#about" 
        style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}
        aria-label="Go to About section"
      >
        About
      </a>
    </nav>
  );
}

export default NavBar;
