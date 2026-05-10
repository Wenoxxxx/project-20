import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  LogOut,
  Settings,
  Bell,
  Search
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/admin.css';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <div className="logo-icon-dot"></div>
          <span className="logo-brand">Admin Panel</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/cases" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Briefcase size={20} />
            <span>Cases</span>
          </NavLink>
          <NavLink to="/admin/teachers" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            <span>Teachers</span>
          </NavLink>
          <div className="nav-divider">System</div>
          <NavLink to="/admin/settings" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button onClick={logout} className="logout-btn">
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-search">
            <Search size={18} />
            <input type="text" placeholder="Search for cases, teachers..." />
          </div>

          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="badge"></span>
            </button>
            <div className="user-profile">
              <div className="user-info">
                <span className="user-name">{user?.name}</span>
                <span className="user-role">Administrator</span>
              </div>
              <img src={user?.picture || "https://via.placeholder.com/40"} alt="Avatar" className="user-avatar" />
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
