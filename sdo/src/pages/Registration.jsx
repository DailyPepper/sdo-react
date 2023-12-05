import React, { useState } from "react";
import "../styles/style.css";
import Header from "../components/Header/Header";

const Registration = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [numberGroup, setNumberGroup] = useState('');

  const handleGroupChange = (e) => {
    const selectedGroupName = e.target.value;
    const groupMappings = {
      'Group1': 1,
      'Group2': 2,
    };
    const selectedGroupId = groupMappings[selectedGroupName];
    setNumberGroup(selectedGroupId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
      group_id: numberGroup,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch('http://127.0.0.1:8000/register', requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Не удалось зарегистрироваться');
        }
        return response.json();
      })
      .then(data => {

        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('role', data.role);

        setUserName('');
        setPassword('');
        setNumberGroup('');
      })
      .catch(error => {
        console.error('Ошибка при регистрации:', error);
      });
  };

  return (
    <>
      <Header />
      <div className='section__login'>
        <h1 className="section__login-heading"> 
          Регистрация
        </h1>
        <form 
          className='section__login-form' 
          method='post'
          action='#'
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            placeholder=" username" 
            name='username'
            value={username}
            className='section__login-formInput'
            onChange={(e) => setUserName(e.target.value)}
          />
          <input 
            type="password"
            placeholder=" Password"
            name='somepassword'
            value={password}
            className='section__login-formInput'
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            value={numberGroup}
            onChange={handleGroupChange}
            className='section__login-formInput'
          >
            <option value="Group1">Group1</option>
            <option value="Group2">Group2</option>
          </select>
          <button type="submit" className='section__login-button'>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </>
  );
}

export default Registration;
