import React, { useState } from 'react';
import "../../styles/style.css"
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7%;
  padding: 40px 0px 245px;
`
const SectionHeading = styled.h1`
  text-align: center;
  font-size: 29px;
  line-height: 35px;
  color: #252525;
  font-family: 'Montserrat';
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 2%;

  .section__login-formInput{
    width: 450px;
    height: 35px;
    font-size: 16px;
    color: #252525;
    font-family: 'Montserrat';
    outline: none;
}
`
const Button = styled.button`
    height: 40px;
    cursor: pointer;
    border-radius: 6px;
    border-style: none;
    background-color: #C8D5F6;
    font-size: 15px;
    color: #252525;
    font-family: 'Montserrat';
    
    &:hover{
    background-color: #DDE5F9;
    color: #FFF;
    transition: 0.4s;

}
`

const Auto = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
        // Сохраняем access_token в LocalStorage
        localStorage.setItem('access_token', data.access_token);
        // Очищаем форму и ошибки
        setUsername('');
        setPassword('');
        setError('');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  // Функция для отправки запросов с учетом токена
  const authorizedFetch = (url, options) => {
    // Получаем access_token из LocalStorage
    const access_token = localStorage.getItem('access_token');

    // Добавляем заголовок Authorization, если токен существует
    if (access_token) {
      options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${access_token}`
      };
    }

    // Отправляем запрос
    return fetch(url, options);
  };

  // Пример использования
  const fetchData = () => {
    authorizedFetch('http://127.0.0.1:8000/docs#/default/login_for_access_token_login_post', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        // Обработка ответа
      })
      .catch(error => {
        // Обработка ошибки
      });
  };

  return (
    <>
      <Section>
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
            value={username}
            className='section__login-formInput'
          />
          <input
            type="password"
            placeholder=" Пароль"
            name='password'
            value={password}
            onChange={handlePasswordChange}
            className='section__login-formInput'
          />
          <Button type="submit" className='section__login-button'>Войти</Button>
        </Form>
        {error && <SectionHeading>{error}</SectionHeading>}
      </Section>
    </>
  );
}

export default Auto;
