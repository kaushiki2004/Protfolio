import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero" onClick={handleNavClick}>
          Kaushiki Dubey
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <a href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="contact-btn group desktop-contact">
            <div className="inner">
              <span>Contact Me</span>
            </div>
          </a>

          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} onClick={handleNavClick}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={handleNavClick}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
