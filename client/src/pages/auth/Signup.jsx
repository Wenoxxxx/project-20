import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { UserPlus, ArrowLeft } from 'lucide-react';
import './Auth.css';

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse) => {
    console.log('Signup Success:', credentialResponse);
    const mockUser = {
      name: "New User",
      email: "user@project20.com",
      role: "user",
      picture: "https://via.placeholder.com/150"
    };
    login(mockUser);
  };

  const handleError = () => {
    console.log('Signup Failed');
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
          <h1>Create Account</h1>
          <p>Join Project-20 and start managing your cases</p>
        </div>

        <div className="google-auth-container">
          <button 
            className="btn btn-primary btn-full"
            onClick={() => handleSuccess({})}
            style={{ padding: '1rem' }}
          >
            <UserPlus size={20} />
            Simulate Signup
          </button>
        </div>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" disabled />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="name@company.com" disabled />
          </div>
          <button className="btn btn-primary btn-full" disabled>
            <UserPlus size={18} />
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
