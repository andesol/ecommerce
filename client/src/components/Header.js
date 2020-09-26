import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1 class="logo">
        <Link to="/">Small things</Link>
      </h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Categories</li>
          <li className="nav-item has-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="10" cy="20.5" r="1" />
              <circle cx="18" cy="20.5" r="1" />
              <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
            </svg>
            <span className="cart-count"></span>
            <span className="cart-text">Cart</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
