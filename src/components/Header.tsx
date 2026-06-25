"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header glass-panel">
      <div className="container flex-between header-container">
        <div className="logo-section">
          <Link href="/">
            <h1 className="logo-text">Gajanan Traders</h1>
            <p className="logo-subtext">Kartar Agricultural Equipments</p>
          </Link>
        </div>
        
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
            <li><Link href="/company-profile" onClick={() => setIsMenuOpen(false)}>Company Profile</Link></li>
            <li><Link href="/contact" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li>
              <a 
                href="#" 
                className="btn-app-download" 
                onClick={(e) => { e.preventDefault(); alert("Gajanan Traders Mobile Application download link is coming soon! Please check back later."); setIsMenuOpen(false); }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #000 0%, #333 100%)',
                  color: '#fff',
                  padding: '10px 20px',
                  fontWeight: 600,
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  border: '1px solid #444',
                  transition: 'opacity 0.2s'
                }}
              >
                Get App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
