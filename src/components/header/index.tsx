import React from 'react';
import Badge from '../badge';
import Fups from '../../assets/svg/fups.svg';
import Avatar from '../../assets/avatar.png';

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const { username, userType, logout } = props;

  return (
    <header className='header'>
      <div className='header__left'>
        <img src={Fups} className='header__logo' alt='logo' />
        <nav className='header__nav'>
          <a
            className='header__nav__item accounts--item active--item'
            href='#accounts'
          >
            Hesaplar
          </a>
          <a className='header__nav__item cards--item' href='#cards'>
            Kartlar
          </a>
          <a className='header__nav__item processes--item' href='#processes'>
            İşlemler
          </a>
          <a className='header__nav__item campaigns--item' href='#campaigns'>
            Kampanyalar
          </a>
        </nav>
      </div>
      <div className='header__right' onClick={logout}>
        <div className='header__right__wrapper'>
          <Badge />
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

export interface IHeaderProps {
  username?: string;
  userType?: string;
  logout?: () => void;
}
