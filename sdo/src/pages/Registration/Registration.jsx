import React, { useState } from "react";
import "../../styles/style.css";
import Header from "../../components/header/Header";
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7%;
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
      <Section>
        <SectionHeading> 
          Регистрация
        </SectionHeading>
        <Form 
          className='section__login-form' 
          method='post'
          action='#'
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            placeholder=" Username" 
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
          <Button type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Section>
    </>
  );
}

export default Registration;
