import React from "react";
import "./header.css";
const Header = ({ getMenu, open }) => {
  return (
    <header>
      <p className="logo">LOGOTYPE</p>
      <div className="basket"></div>
      <nav onClick={() => getMenu()}>
        <button class={`nav-toggle ${open ? "opened" : ""}`}>
          <span class="bar-top"></span>
          <span class="bar-mid"></span>
          <span class="bar-bot"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
