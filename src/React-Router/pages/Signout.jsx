// src/pages/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 🧹 Clear session or token
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');

    // 👋 Redirect to login page
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed
};

export default Signout;