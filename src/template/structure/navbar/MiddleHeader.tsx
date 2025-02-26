import React, { useState } from "react";
import "./middlenav.css";
import { NavLink } from "react-router-dom";

interface MiddleHeaderProps {
  isSticky: boolean;
}

interface TopNavbarProps {
  isHidden: boolean;
}

const MiddleHeader: React.FC<MiddleHeaderProps> = ({ isSticky, isHidden }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="nav nav-web d-flex">
        <div className="brand">
          <img src="assets/images/logo.png" alt="logo" className="logo"></img>
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
                Services
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
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => toggleMobileMenu()}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-mobile">
          <button className="hamburger" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "X" : "☰"}
          </button>
          <div className="brand-mobile">
            <img src="assets/images/logo.png" alt="logo" className="logo"></img>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MiddleHeader;
