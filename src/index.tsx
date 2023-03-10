import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import userStore from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={userStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
