import React, { FormEvent, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/userSlice';
import { selectUser } from '../../features/userSlice';
import { setSession } from '../../helpers/';
import { Select, Textfield, Button } from '../../components/';
import { IFormProps, FORGOT_PASSWORD, LOGIN } from '../../model';

const Form: React.FC<IFormProps> = (props: IFormProps) => {
  const { onLoading } = props;

  const [userType, setUserType] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userTypeError, setUserTypeError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [allErrorToggle, setAllErrorToggle] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const loginRedirect = useCallback(() => {
    navigate('/dashboard');
  }, [navigate]);

  /**
   *
   * @param e
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userType !== '' && userName !== '' && password !== '') {
      onLoading();
      setTimeout(() => {
        dispatch(
          login({
            userType: userType,
            userName: userName,
            password: password,
            loggedIn: true,
          })
        );
        return false;
      }, 2000);
    }

    setAllErrorToggle(true);
  };

  /**
   *
   * @param value
   */
  const handleUserType = (value: string) => {
    value ? setUserTypeError(false) : setUserTypeError(true);
    setUserType(value);
  };

  /**
   *
   * @param value
   */
  const handleUserName = (value: string) => {
    value ? setUserNameError(false) : setUserNameError(true);
    setUserName(value);
  };

  /**
   *
   * @param value
   */
  const handlePassword = (value: string) => {
    value ? setPasswordError(false) : setPasswordError(true);
    setPassword(value);
  };

  useEffect(() => {
    if (user) {
      loginRedirect();
      setSession(user);
    }
  }, [user, loginRedirect]);

  useEffect(() => {
    if (allErrorToggle) {
      userType !== '' ? setUserTypeError(false) : setUserTypeError(true);
      userName !== '' ? setUserNameError(false) : setUserNameError(true);
      userName !== '' ? setPasswordError(false) : setPasswordError(true);
    }
  }, [allErrorToggle]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Select
        value={userType}
        label='Kullanıcı Tipi'
        options={[
          { label: 'Standart Hesap', value: 1 },
          { label: 'Onaylı Hesap', value: 2 },
          { label: 'Premium Hesap', value: 3 },
        ]}
        onChange={handleUserType}
        error={userTypeError}
      />
      <Textfield
        name='username'
        label='Kullanıcı Adı'
        value={userName}
        type='text'
        onChange={handleUserName}
        error={userNameError}
      />
      <Textfield
        name='password'
        label='Şifren'
        value={password}
        type='password'
        onChange={handlePassword}
        error={passwordError}
      />
      <div className='form__buttons'>
        <Link to={`#forgot-password`} className='form__buttons__reminder'>
          {FORGOT_PASSWORD}
        </Link>
        <Button onClick={handleSubmit}>{LOGIN}</Button>
      </div>
    </form>
  );
};

export default Form;
