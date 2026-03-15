import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">YourName</div>
          <div className="muted">Built with React • Deployed on Vercel</div>
        </div>

        <div className="footer-links">
          <Link to="/portfolio" className="footer-link">
            Portfolio
          </Link>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <div className="footer-right muted">© {year}</div>
      </div>
    </footer>
  );
}
