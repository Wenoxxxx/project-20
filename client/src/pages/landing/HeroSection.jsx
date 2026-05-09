import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-simple" id="hero">
      <div className="container">
        <div className="hero-simple-content">

          <div className="section-badge">
            Kiliog Elementary School
          </div>
          <h1 className="hero-simple-title">
            Project-20<br />
            <span className="text-gradient">Financial Aid Tracking.</span>
          </h1>
          <p className="hero-simple-description">
            Providing transparent and compassionate support to deceased teachers' families
            through pooled contributions across DepEd Bukidnon.
          </p>

          <div className="hero-simple-actions">
            <a href="#process" className="btn btn-primary">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>

          <div className="hero-simple-visual">
            <div className="simple-card">
              <div className="simple-card-row">
                <div className="simple-stat">
                  <span className="label">Total Collected</span>
                  <span className="value">₱ 8,000</span>
                </div>
                <div className="simple-stat">
                  <span className="label">Contributors</span>
                  <span className="value">16 Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
