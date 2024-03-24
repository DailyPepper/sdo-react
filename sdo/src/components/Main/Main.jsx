import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { LABORATORY_ROUTE } from '../../app/routing/route';
import { useDispatch } from 'react-redux';
import { login } from '../../pages/Auto/Slice/authSlice'; 
import { useNavigate } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = (role) => {
    dispatch(login({ role }));
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
