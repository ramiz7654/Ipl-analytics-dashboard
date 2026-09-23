import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* IPL Logo */}
          <a href="/" className="navbar-brand" onClick={closeMenu}>
            <img
              src="/ipl-logo.png"
              alt="IPL Logo"
              className="navbar-logo"
            />
          </a>

          {/* Desktop Menu */}
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/players">Players</Link>
            <Link to="/records">Records</Link>
            <Link to="/charts">Charts</Link>
            <Link to="/about">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </nav>

      {/* Dark Overlay */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}

      {/* Slide Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span>IPL Analytics</span>

          <button onClick={closeMenu}>
            ✕
          </button>
        </div>

        <div className="drawer-links">
          <Link to="/" onClick={closeMenu}>
            <span>⌂</span>
            Home
          </Link>

          <Link to="/teams" onClick={closeMenu}>
            <span>🏏</span>
            Teams
          </Link>

          <Link to="/players" onClick={closeMenu}>
            <span>👤</span>
            Players
          </Link>

          <Link to="/records" onClick={closeMenu}>
            <span>🏆</span>
            Records
          </Link>

          <Link to="/charts" onClick={closeMenu}>
            <span>📊</span>
            Charts
          </Link>

          <Link to="/about" onClick={closeMenu}>
            <span>ℹ️</span>
            About
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;