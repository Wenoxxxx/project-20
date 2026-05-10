import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  Users, 
  Briefcase, 
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading-screen">Loading stats...</div>;
  if (!stats) return <div className="error-screen">Failed to load dashboard data.</div>;

  return (
    <div className="dashboard-view">
      <div className="section-header-flex">
        <div className="section-header">
          <h1 className="section-title">Dashboard Overview</h1>
          <p className="section-subtitle">Real-time monitoring of project metrics and teacher contributions.</p>
        </div>
        <div className="header-date-badge" style={{ 
          background: 'var(--bg-secondary)', 
          padding: '8px 16px', 
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Clock size={14} />
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'rgba(216, 17, 230, 0.1)', color: 'var(--primary-color)' }}>
              <DollarSign size={26} />
            </div>
            <div className="stat-badge-mini" style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingUp size={16} />
              <span style={{ fontSize: '12px', fontWeight: '700' }}>12%</span>
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-title">Money Collected</div>
            <div className="stat-value">₱{stats.totalCollected.toLocaleString()}</div>
            <div className="stat-trend trend-up">
              <ArrowUpRight size={14} />
              <span>Higher than last month</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'rgba(107, 33, 243, 0.1)', color: 'var(--secondary-color)' }}>
              <Briefcase size={26} />
            </div>
            <div className="stat-badge-mini" style={{ color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingUp size={16} />
              <span style={{ fontSize: '12px', fontWeight: '700' }}>8%</span>
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-title">Active Cases</div>
            <div className="stat-value">{stats.activeCases}</div>
            <div className="stat-trend trend-up">
              <ArrowUpRight size={14} />
              <span>4 new cases added</span>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="stat-icon" style={{ background: 'rgba(255, 217, 0, 0.1)', color: 'var(--accent-color)' }}>
              <Users size={26} />
            </div>
            <div className="stat-badge-mini" style={{ color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <TrendingDown size={16} />
              <span style={{ fontSize: '12px', fontWeight: '700' }}>2%</span>
            </div>
          </div>
          <div className="stat-content">
            <div className="stat-title">Total Teachers</div>
            <div className="stat-value">{stats.totalTeachers}</div>
            <div className="stat-trend trend-down">
              <ArrowDownRight size={14} />
              <span>Recent retirements</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card-table">
        <div className="table-header">
          <h2 className="table-title">Recent Activity</h2>
          <button className="btn btn-outline btn-sm">View Reports</button>
        </div>
        <div className="table-wrapper" style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Activity Details</th>
                <th>Category</th>
                <th>Assigned To</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentActivity.map((activity) => (
                <tr key={activity.id}>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>{activity.message.split(':')[0]}</span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{activity.message.split(':')[1]}</span>
                    </div>
                  </td>
                  <td><span className="badge-type">{activity.type}</span></td>
                  <td>Admin Central</td>
                  <td>{activity.time}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} className="status-active" />
                      <span className="status-badge status-active">Verified</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
