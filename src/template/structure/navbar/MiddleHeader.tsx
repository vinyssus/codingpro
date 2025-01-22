import React, { useState } from "react";
import "./middlenav.css";
import { NavLink } from "react-router-dom";

const MiddleHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="nav nav-web d-flex">
        <div className="brand">
          <h2>Coding-Pro</h2>
        </div>
        <div className={`menu-nav-items ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="d-flex h-100 w-100 justify-content-center align-items-center gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")} 
                onClick={() => toggleMobileMenu()}
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                A propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "X" : "☰"}
        </button>
      </nav>
    </>
  );
};

export default MiddleHeader;