import "./style.css"
import logo from "../../img/logo.svg"
import React, { useState } from "react";
import Bread from "../BreadCrumbs";
import { Link } from "react-router-dom";


const Header = ({ setIsLoggedIn, isLoggedIn, isButtonClicked }) => {


    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return ( 
        <>
            <header className="header">
                <div className="header__wrapper">
                    <div>
                        <img src={logo} className="header__img-logo" alt="логотип"></img>    
                    </div>
                    {/* {isButtonClicked && ( */}
                        <nav className="header__nav">
                            <Link to="/laboratory"className="header__nav-lr">
                                Лабараторная работа
                            </Link>
                            <Link to="/profile" className="header__nav-lr">
                                Личный кабинет
                            </Link>
                            {isLoggedIn  ? (
                                <button className="header__nav-lr" onClick={handleLogout}>
                                    Выйти
                                </button>
                            ) : (
                                <Link to="/Registration" className="header__nav-lr">
                                    Регистрация
                                </Link>
                            )}
                        </nav>
                    {/* // )} */}
                </div>
                
            </header>
            <Bread/>
        </>
     );
}
 
export default Header;