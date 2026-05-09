import React from 'react';
import {
  CheckCircle2,
  HandHeart,
  Building2,
  ArrowRight
} from 'lucide-react';
import './AboutSection.css';

const values = [
  'Full Transparency',
  'Real-Time Tracking',
  'Secure & Private',
  'Community Driven',
];

export default function AboutSection() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid-clean">
          <div className="about-visual-simple">
            <div className="visual-circle">
              <HandHeart size={64} className="visual-icon-main" />
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
            </div>
          </div>

          <div className="about-content-clean">
            <div className="section-badge">
              <Building2 size={14} />
              About Project-20
            </div>
            <h2 className="section-title">Unity Through Compassion</h2>
            <p className="about-para">
              Project-20 was created for Kiliog Elementary School to digitize and
              streamline the financial aid process for families of deceased teachers
              across DepEd Bukidnon.
            </p>
            <p className="about-para">
              What was once a manual, paper-based system is now a transparent,
              real-time platform that ensures every contribution is tracked and every
              beneficiary receives the support they deserve.
            </p>

            <div className="about-values-grid">
              {values.map((value, index) => (
                <div className="value-chip" key={index}>
                  <CheckCircle2 size={16} className="text-success" />
                  <span>{value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
