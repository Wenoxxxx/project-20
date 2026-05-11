import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  LogOut,
  Settings,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/admin.css';

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={`admin-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-section" onClick={() => { navigate('/'); closeSidebar(); }} style={{ cursor: 'pointer' }}>
            <div className="logo-icon-dot"></div>
            <span className="logo-brand">Admin Panel</span>
          </div>
          <button className="mobile-close-btn" onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" onClick={closeSidebar} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin/cases" onClick={closeSidebar} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Briefcase size={20} />
            <span>Cases</span>
          </NavLink>
          <NavLink to="/admin/teachers" onClick={closeSidebar} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            <span>Teachers</span>
          </NavLink>
          <div className="nav-divider">System</div>
          <NavLink to="/admin/settings" onClick={closeSidebar} className="nav-item">
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
          <div className="header-container">
            <div className="header-left">
              <button className="mobile-menu-btn" onClick={toggleSidebar}>
                <Menu size={24} />
              </button>
              <div className="header-search">
                <Search size={18} />
                <input type="text" placeholder="Search..." />
              </div>
            </div>

            <div className="header-actions">
              <button className="icon-btn mobile-hidden">
                <Bell size={20} />
                <span className="badge"></span>
              </button>
              <div className="user-profile">
                <div className="user-info mobile-hidden">
                  <span className="user-name">{user?.name}</span>
                  <span className="user-role">Admin</span>
                </div>
                <img src={user?.picture || "https://via.placeholder.com/40"} alt="Avatar" className="user-avatar" />
              </div>
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
