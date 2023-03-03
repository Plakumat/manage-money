import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components';
import Fups from '../assets/svg/fups.svg';
import PhoneIcon from '../assets/svg/phone.svg';
import UserIcon from '../assets/svg/user.svg';
import IdentifyIcon from '../assets/svg/identify.svg';
import Lottie from 'react-lottie';
import Loading from '../loading.json';
import {
  SIGN_UP,
  SIGN_UP_PANEL,
  SIGN_UP_DESCRIPTION,
  LOADING_TEXT,
  HOW_TO_USE,
  OPEN_APP,
  CLICK_PROFILE,
  SCAN_QR,
} from '../model';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadLottie = () => {
    setLoading(true);
  };

  return (
    <div className='login'>
      {loading && (
        <div className='loading'>
          <div className='loading__content'>
            <Lottie options={lottieOptions} height={145} width={145} />
            <p className='loading__content__text'>{LOADING_TEXT}</p>
          </div>
        </div>
      )}
      <div className='login__area'>
        <header className='login__area__header'>
          <img src={Fups} alt='logo' />
          <Link to={`#sign-up`} className='login__area__header__signup'>
            {SIGN_UP}
          </Link>
        </header>
        <section className='login__area__wrapper'>
          <div className='login__area__form'>
            <h1 className='login__area__form__title'>{SIGN_UP_PANEL}</h1>
            <p className='login__area__form__description'>
              {SIGN_UP_DESCRIPTION}
            </p>
            <LoginForm onLoading={loadLottie} />
          </div>
        </section>
      </div>
      <div className='login__information'>
        <h2 className='login__information__title'>{HOW_TO_USE}</h2>
        <ul className='login__information__substances'>
          <li className='login__information__substances__item'>
            <img
              src={PhoneIcon}
              className='login__information__substances__icon'
              alt='phone'
            />
            <p>{OPEN_APP}</p>
          </li>
          <li className='login__information__substances__item'>
            <img
              src={UserIcon}
              className='login__information__substances__icon'
              alt='user'
            />
            <p>{CLICK_PROFILE}</p>
          </li>
          <li className='login__information__substances__item'>
            <img
              src={IdentifyIcon}
              className='login__information__substances__icon'
              alt='identify'
            />
            <p>{SCAN_QR}</p>{' '}
          </li>
        </ul>
        <div className='login__information__widget'></div>
      </div>
      <div className='login__pattern'></div>
    </div>
  );
};

export default Login;
