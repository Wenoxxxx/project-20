import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, MoreVertical, Calendar, User, FileText, CheckCircle2, Clock } from 'lucide-react';

export default function Cases() {
  const [showForm, setShowForm] = useState(false);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching cases:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-screen">Loading case records...</div>;

  return (
    <div className="cases-view">
      <div className="section-header-flex">
        <div className="section-header">
          <h1 className="section-title">Case Management</h1>
          <p className="section-subtitle">Create and monitor cases for the deceased teachers.</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          <Plus size={18} />
          <span>New Case</span>
        </button>
      </div>

      {showForm && (
        <div className="admin-form-card" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--spacing-xl)' }}>
            <div className="stat-icon" style={{ background: 'rgba(216, 17, 230, 0.1)', color: 'var(--primary-color)', width: '40px', height: '40px' }}>
              <FileText size={20} />
            </div>
            <h2 className="table-title">Register New Case</h2>
          </div>
          <form className="admin-form form-grid">
            <div className="form-group">
              <label>Case Number</label>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="e.g. C-2024-001" style={{ paddingLeft: '2.5rem' }} />
                <FileText size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>
            <div className="form-group">
              <label>Date Registered</label>
              <div style={{ position: 'relative' }}>
                <input type="date" style={{ paddingLeft: '2.5rem' }} />
                <Calendar size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Name of the Deceased</label>
              <div style={{ position: 'relative' }}>
                <input type="text" placeholder="Enter full name of teacher" style={{ paddingLeft: '2.5rem' }} />
                <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Notes / Remarks</label>
              <textarea 
                placeholder="Additional details regarding the case..." 
                rows="4"
              ></textarea>
            </div>
            <div className="form-actions full-width" style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-md)' }}>
              <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Save Case</button>
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)} style={{ flex: 1, justifyContent: 'center' }}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="card-table">
        <div className="table-header">
          <div className="header-search" style={{ width: '280px' }}>
            <Search size={16} />
            <input type="text" placeholder="Search cases..." />
          </div>
          <div className="table-actions">
            <button className="btn btn-outline btn-sm">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>
        </div>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Case Identifier</th>
                <th>Deceased Teacher</th>
                <th>Date Registered</th>
                <th>Current Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((caseItem) => (
                <tr key={caseItem.id}>
                  <td><strong style={{ color: 'var(--text-primary)' }}>{caseItem.caseNumber}</strong></td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div className="avatar-small">
                        {caseItem.deceasedName.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <strong>{caseItem.deceasedName}</strong>
                    </div>
                  </td>
                  <td>{new Date(caseItem.dateRegistered).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {caseItem.status === 'Active' ? (
                        <CheckCircle2 size={14} className="status-active" />
                      ) : (
                        <Clock size={14} className="status-archived" />
                      )}
                      <span className={`status-badge ${caseItem.status === 'Active' ? 'status-active' : 'status-archived'}`}>
                        {caseItem.status}
                      </span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }}><button className="icon-btn"><MoreVertical size={18} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
