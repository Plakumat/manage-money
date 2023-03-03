import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../features/userSlice';
import { removeSession } from '../helpers';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logoutRedirect = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleLogout = () => {
    dispatch(logout());
    removeSession();
  };

  useEffect(() => {
    if (!user) {
      logoutRedirect();
      return;
    }
  }, [user, logoutRedirect]);

  if (user) {
    const { userName } = user;

    return (
      <>
        <p>Welcome {userName}</p>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  return <></>;
};

export default Dashboard;
