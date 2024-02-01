import React from "react";
import "../Main/style.css";
import { Link } from "react-router-dom";
import Logged from "../Logged";
import { useState } from "react";
import styled from 'styled-components'

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
const Main = ({Logged}) => {

    const [showNav, setShowNav] = useState(false);
    const [isButtonClicked, setButtonClicked] = useState(false);
    const handleClick = ()=>{
        setButtonClicked(true)
    }
    return ( 
        <>
                <Section>
                    {Logged ? (
                        <SectionHead>Добро пожаловать в личный кабинет!</SectionHead>
                    ) : (
                        <>
                            <SectionHead>
                                Войдите в учетную запись или зарегистрируйтесть:
                            </SectionHead>
                            <Block>
                                <Link className="section__block-btn" to="/login" onClick={handleClick}>
                                    Студент
                                </Link>
                                <Link className="section__block-btn" to="/login" onClick={handleClick}> 
                                    Преподователь
                                </Link>
                            </Block>  
                        </>
                    )
                }
                </Section>
        </>
        
     );
}
 
export default Main;