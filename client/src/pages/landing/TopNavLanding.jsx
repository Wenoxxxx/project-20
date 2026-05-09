import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import './TopNavLanding.css';

export default function TopNavLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`top-nav-clean ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-wrapper">
        <div className="nav-logo-simple">
          <div className="logo-icon-dot"></div>
          <span className="logo-brand">Project-20</span>
        </div>

        <div className="nav-links-desktop">
          <a href="#hero" className="nav-link-item">Home</a>
          <a href="#process" className="nav-link-item">Process</a>
          <a href="#about" className="nav-link-item">About</a>
        </div>

        <div className="nav-actions-desktop">
          <button className="btn btn-outline btn-sm">Sign In</button>
          <button className="btn btn-primary btn-sm">Get Started</button>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <hr className="mobile-divider" />
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
}