import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, ArrowLeft } from 'lucide-react';
import './Auth.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // In a real app, you'd verify this token with your backend
    // For now, we'll simulate a successful admin login
    const mockUser = {
      name: "Admin User",
      email: "admin@project20.com",
      role: "admin", // Simulating admin role
      picture: "https://via.placeholder.com/150"
    };
    login(mockUser);
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="auth-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <div className="logo-icon-dot"></div>
            <span>Project-20</span>
          </div>
          <h1>Welcome Back</h1>
          <p>Sign in to your account to continue</p>
        </div>

        <div className="google-auth-container">
          <button 
            className="btn btn-primary btn-full"
            onClick={() => handleSuccess({})}
            style={{ padding: '1rem' }}
          >
            <LogIn size={20} />
            Simulate Admin Login
          </button>
        </div>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@company.com" disabled />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" disabled />
          </div>
          <button className="btn btn-primary btn-full" disabled>
            <LogIn size={18} />
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
