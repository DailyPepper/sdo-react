import React, { useState, useEffect } from "react";
import "../Main/style.css";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { useAuth } from "../AuthContext";
import { LABORATORY_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../app/routing/route';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px 245px;
`
const SectionHead = styled.h1`
    color: #000;
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 500;
    line-height: 27px; 
`
const Block = styled.div`
    display: flex;
    gap: 40px;
    padding-top: 35px;

    .section__block-btn{
    width: 395px;
    height: 138px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    cursor: pointer;
    text-decoration: none;
    color: #000;
    border-radius: 7px;
    background: #E2EDD0;
    }
    .section__block-btn:hover{
        background: #C8D5F6;
        color: #FFF;
        transition: 0.3s;
    }
`

const Main = () => {
    const { login } = useAuth();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = (role) => {
      login(role);
      setIsAuthenticated(true);
      // После успешной аутентификации перенаправьте пользователя
      console.log("Successful login. Redirecting...");
      navigate(LABORATORY_ROUTE);
    };
  
    return ( 
      <>
        <Section>
          <SectionHead>
            Войдите в учетную запись или зарегистрируйтесть:
          </SectionHead>
          <Block>
            <Link 
              className="section__block-btn" 
              to="/login" 
              onClick={() => handleLogin('student')}
            >
              Студент
            </Link>
            <Link 
              className="section__block-btn" 
              to="/login" 
              onClick={() => handleLogin('teacher')}
            > 
              Преподователь
            </Link>
          </Block>
        </Section>
      </>
    );
}

export default Main;
