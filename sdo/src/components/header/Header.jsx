import "./style.css"
import logo from "../../img/logo.svg"
import React from "react";
import Bread from "../BreadCrumbs";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { LABORATORY_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../../app/routing/route';

const HeaderStyle = styled.header`
    width: 100%;
    height: 100%;
    background-color: #C8D5F6; 
`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 0px 0px 60px;
`
const Nav = styled.nav`
    padding: 20px 0px 30px 0px;
    display: flex;
    justify-content: flex-end;

    .header__nav-lr{
        margin-right: 40px;
        color: #C8D5F6;
        text-decoration: none;
        font-size: 16px;
        font-family: 'Montserrat';
        line-height: 27px;
        background-color: #FFF;
        width: 232px;
        height: 36px;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__nav-lr:hover{
        color: #FFF;
        background-color: #DDE5F9;
        transition: 0.5s;
    }
`
const ButtonEx = styled.button`
    margin-right: 40px;
    color: #C8D5F6;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Montserrat';
    line-height: 27px;
    background-color: #FFF;
    width: 232px;
    height: 36px;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = ({ setIsLoggedIn, isLoggedIn, isButtonClicked }) => {


    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return ( 
        <>
            <HeaderStyle>
                <HeaderWrapper>
                    <div>
                        <Link to="/">
                            <img src={logo} alt="логотип"/>
                        </Link>    
                    </div>
                    {/* {isButtonClicked && ( */}
                        <Nav>
                            <Link to={LABORATORY_ROUTE} className="header__nav-lr">
                                Лабораторная работа
                            </Link>
                            <Link to={PROFILE_ROUTE} className="header__nav-lr">
                                Личный кабинет
                            </Link>
                            {isLoggedIn  ? (
                                <ButtonEx onClick={handleLogout}>
                                    Выйти
                                </ButtonEx>
                            ) : (
                                <Link to={REGISTRATION_ROUTE} className="header__nav-lr">
                                    Регистрация
                                </Link>
                            )}
                        </Nav>
                    {/* // )} */}
                </HeaderWrapper>
            </HeaderStyle>
            <Bread/>
        </>
     );
}
 
export default Header;