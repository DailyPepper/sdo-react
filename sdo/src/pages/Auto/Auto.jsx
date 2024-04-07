import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './Slice/authSlice'; 

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7%;
  padding: 40px 0px 245px;
`;

const SectionHeading = styled.h1`
  text-align: center;
  font-size: 29px;
  line-height: 35px;
  color: #252525;
  font-family: 'Montserrat';
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 2%;

  .section__login-formInput {
    width: 450px;
    height: 35px;
    font-size: 16px;
    color: #252525;
    font-family: 'Montserrat';
    outline: none;
  }
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 6px;
  border-style: none;
  background-color: #c8d5f6;
  font-size: 15px;
  color: #252525;
  font-family: 'Montserrat';

  &:hover {
    background-color: #dde5f9;
    color: #fff;
    transition: 0.4s;
  }
`;

const Auto = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSuccessfulLogin = () => {
    fetch('http://127.0.0.1:8000/user-status', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка получения статуса пользователя');
      }
    })
    .then(data => {
      if (data.status === 'teacher') {
        navigate('/mainTeacher');
      } else if (data.status === 'student') {
        navigate('/mainStud');
      } else {
        throw new Error('Неизвестный статус пользователя');
      }
    })
    .catch(error => {
      setError(error.message);
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'username': username, 'password': password })
    };

    fetch('http://127.0.0.1:8000/login', requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Не удалось войти');
        }
      })
      .then(data => {
        localStorage.setItem('access_token', data.access_token);
        setPassword('');
        setError('');
        handleSuccessfulLogin();
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <>
      <Section>
        <>
          <SectionHeading>
            Войдите в личный кабинет
          </SectionHeading>
          <Form
            onSubmit={handleSubmit}
            method='post'
            action='#'
          >
            <input
              type="text"
              placeholder=" Ваше имя"
              onChange={handleUsernameChange}
              name='username'
              className='section__login-formInput'
            />
            <input
              type="password"
              placeholder=" Пароль"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='section__login-formInput'
            />
            <Button type="submit" className='section__login-button'>Войти</Button>
          </Form>
          {error && <SectionHeading>{error}</SectionHeading>}
        </>
      </Section>
    </>
  );
}

export default Auto;
