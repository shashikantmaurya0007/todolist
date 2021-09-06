import React from "react";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
