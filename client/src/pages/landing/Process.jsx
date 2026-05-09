import React from 'react';
import { HandHeart } from 'lucide-react';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Register & Enroll',
    description: 'Teachers and staff join the program through a quick, secure registration process verified by admin.',
  },
  {
    number: '02',
    title: 'Track & Monitor',
    description: 'Use real-time dashboards to monitor collection progress, view analytics, and generate reports.',
  },
  {
    number: '03',
    title: 'Aid Disbursement',
    description: 'Funds are disbursed to the beneficiary family with full transparency — every peso accounted for.',
  },
];

export default function Process() {
  return (
    <section className="process section-padding" id="process">
      <div className="container">
        <div className="section-header-center">
          <div className="section-badge">
            <HandHeart size={14} />
            How It Works
          </div>
          <h2 className="section-title">Simple, Transparent Process</h2>
          <p className="section-subtitle-center">
            From contribution to disbursement — every step is tracked and visible.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div className="step-item-clean" key={index}>
              <div className="step-badge">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
