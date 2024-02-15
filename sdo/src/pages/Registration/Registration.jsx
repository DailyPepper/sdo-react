import React, { useState } from "react";
import "../../styles/style.css";
import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7%;
  padding: 40px 0px 200px;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      username,
      password,
      group_name: numberGroup,
    };
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch('http://127.0.0.1:8000/register', requestOptions);
  
      if (!response.ok) {
        throw new Error('Не удалось зарегистрироваться');
      }
  
      const responseData = await response.json();
      localStorage.setItem('access_token', responseData.access_token);
      localStorage.setItem('role', responseData.role);
  
      setUserName('');
      setPassword('');
      setNumberGroup('');
    } catch (error) {
      console.error('Ошибка при регистрации:', error.message);
    }
  };

  return (
    <>
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
          <input 
            type="text"
            placeholder=" Group"
            name='somepassword'
            value={numberGroup}
            className='section__login-formInput'
            onChange={(e) => setNumberGroup(e.target.value)}
          />
          <Button type="submit">
            Зарегистрироваться
          </Button>
        </Form>
      </Section>
    </>
  );
}

export default Registration;