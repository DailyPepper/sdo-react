import "./style.css"
import logo from "../../img/logo.svg"
import React from "react";

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <div>
                    <img src={logo} className="header__img-logo" alt="логотип"></img>    
                </div>
                <nav className="header__nav">
                    <a href="#" className="header__nav-lr">
                        Лабараторная работа
                    </a>
                    <a href="#" className="header__nav-lr">
                        Личный кабинет
                    </a>
                    <a href="#" className="header__nav-lr">
                        Выйти
                    </a>
                </nav>
            </div>
            

        </header>
     );
}
 
export default Header;