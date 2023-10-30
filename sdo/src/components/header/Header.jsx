import "./style.css"
import logo from "../../img/logo.svg"
import React, { useState } from "react";
import Auto from "../../pages/Auto";
import { Link } from "react-router-dom";
import Laboratory from "../../pages/Laboratory";

const Header = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogout = () => {
        setIsAuthenticated(false)
    }
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <div>
                    <img src={logo} className="header__img-logo" alt="логотип"></img>    
                </div>
                <nav className="header__nav">
                    <Link to="/laboratory"className="header__nav-lr">
                        Лабараторная работа
                    </Link>
                    <Link to="/profile" className="header__nav-lr">
                        Личный кабинет
                    </Link>
                    {isAuthenticated ? (
                        <button className="header__nav-lr" onClick={handleLogout}>
                        Выйти
                        </button>
                    ) : (
                        <Link to="/login" className="header__nav-lr">
                        Войти
                        </Link>
                    )}

                </nav>
            </div>
            
            
        </header>
     );
}
 
export default Header;