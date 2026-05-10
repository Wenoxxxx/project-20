import React, { useState, useEffect } from 'react';
import { Search, Mail, Phone, MoreVertical, Download, Users, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/teachers')
      .then(res => res.json())
      .then(data => {
        // Ensure data has the required structure (adding defaults if missing)
        const formattedData = data.map(t => ({
          ...t,
          phone: t.phone || "+63 000 000 0000",
          initial: t.initial || t.name.split(' ').map(n => n[0]).join('').toUpperCase()
        }));
        setTeachers(formattedData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching teachers:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-screen">Loading faculty data...</div>;
  return (
    <div className="teachers-view">
      <div className="section-header-flex">
        <div className="section-header">
          <h1 className="section-title">Teachers Master List</h1>
          <p className="section-subtitle">Manage school faculty members and contact information.</p>
        </div>
        <button className="btn btn-outline">
          <Download size={18} />
          <span>Export Directory</span>
        </button>
      </div>

      <div className="card-table">
        <div className="table-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="stat-icon" style={{ background: 'rgba(255, 217, 0, 0.1)', color: 'var(--accent-color)', width: '32px', height: '32px' }}>
              <Users size={18} />
            </div>
            <h2 className="table-title">Faculty Directory</h2>
          </div>
          <div className="header-search" style={{ width: '320px' }}>
            <Search size={16} />
            <input type="text" placeholder="Search by name, dept, or email..." />
          </div>
        </div>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Teacher Profile</th>
                <th>Department</th>
                <th>Contact Channels</th>
                <th>Current Status</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>
                    <div className="teacher-info-cell">
                      <div className="avatar-small">{teacher.initial}</div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>{teacher.name}</strong>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>ID: #T-00{teacher.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      padding: '4px 10px', 
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {teacher.department}
                    </span>
                  </td>
                  <td>
                    <div className="contact-cell">
                      <div className="contact-item"><Mail size={12} style={{ color: 'var(--primary-color)' }} /> {teacher.email}</div>
                      <div className="contact-item"><Phone size={12} style={{ color: 'var(--secondary-color)' }} /> {teacher.phone}</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {teacher.status === 'Active' ? (
                        <CheckCircle2 size={14} className="status-active" />
                      ) : (
                        <AlertCircle size={14} className="status-pending" />
                      )}
                      <span className={`status-badge ${teacher.status === 'Active' ? 'status-active' : 'status-pending'}`}>
                        {teacher.status}
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
