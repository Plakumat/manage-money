import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../features/userSlice';
import { removeSession } from '../helpers';
import { Header, Carousel, Activities, Exchange } from '../components';

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
    const { userName, userType } = user;

    return (
      <section className='dashboard'>
        <Header username={userName} userType={userType} logout={handleLogout} />
        <Carousel />
        <Activities />
        <Exchange />
      </section>
    );
  }

  return <></>;
};

export default Dashboard;
