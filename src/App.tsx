import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { login } from './features/userSlice';
import { selectUser } from './features/userSlice';
import { getSession } from './helpers/';
import Login from './container/login';
import Dashboard from './container/dashboard';
import { Theme } from './components/';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const userData = getSession();

  const palette = Theme();

  useEffect(() => {
    if (userData) {
      const { userType, userName, password } = userData;

      dispatch(
        login({
          userType: userType,
          userName: userName,
          password: password,
          loggedIn: true,
        })
      );
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={palette}>
      <Routes>
        <Route
          path='*'
          element={<Navigate to={user ? '/dashboard' : '/login'} replace />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
