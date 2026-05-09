import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './FooterSection.css';

export default function FooterSection() {
  return (
    <footer className="footer-clean" id="footer">
      <div className="container">
        <div className="footer-grid-simple">
          <div className="footer-info">
            <div className="logo-minimal">
              <span className="logo-dot"></span>
              <span className="logo-text">Project-20</span>
            </div>
            <p className="footer-tagline">
              Providing transparent and compassionate support to deceased teachers' families through pooled contributions across DepEd Bukidnon.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#process">How It Works</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <ul className="contact-details">
              <li><MapPin size={16} /> Kiliog, Libona, Bukidnon</li>
              <li><Mail size={16} /> support@project20.ph</li>
              <li><Phone size={16} /> +63 912 345 6789</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} Project-20. All rights reserved.</p>
          <div className="footer-credits">
            Built by <span>Owen Jerusalem</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
