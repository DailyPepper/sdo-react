import React, { useState } from 'react';
import "../styles/style.css"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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
      <Header />
      <div className='section__login'>
        <h1 className="section__login-heading">
          Войдите в личный кабинет
        </h1>
        <form
          onSubmit={handleSubmit}
          className='section__login-form'
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
          <button type="submit" className='section__login-button'>Войти</button>
        </form>
        {error && <p className="section__login-heading">{error}</p>}
      </div>
      <Footer />
    </>
  );
}

export default Auto;
