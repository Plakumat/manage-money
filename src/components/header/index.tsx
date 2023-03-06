import React from 'react';
import Badge from '../badge';
import {
  IHeaderProps,
  ACCOUNTS,
  CARDS,
  PROCESSES,
  CAMPAIGNS,
} from '../../model';
import Fups from '../../assets/svg/fups.svg';
import Avatar from '../../assets/avatar.png';

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { username, userType, logout } = props;

  return (
    <header className='header'>
      <div className='header__left'>
        <img src={Fups} className='header__logo' alt='logo' />
        <nav className='header__nav'>
          <div className='header__nav__item accounts--item active--item'>
            {ACCOUNTS}
            <div className='dropdown'>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 1
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 2
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 3
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 4
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 5
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 6
              </a>
              <a href='#dropdown-menu' className='dropdown__item'>
                Menu 7
              </a>
            </div>
          </div>
          <a className='header__nav__item cards--item' href='#cards'>
            {CARDS}
          </a>
          <a className='header__nav__item processes--item' href='#processes'>
            {PROCESSES}
          </a>
          <a className='header__nav__item campaigns--item' href='#campaigns'>
            {CAMPAIGNS}
          </a>
        </nav>
      </div>
      <div className='header__right' onClick={logout}>
        <div className='header__right__wrapper'>
          <Badge value={12} />
          <img src={Avatar} className='header__right__avatar' alt='avatar' />
        </div>
        <div className='header__user'>
          <span className='header__user__name'>{username}</span>
          <span className='header__user__status'>{userType}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
