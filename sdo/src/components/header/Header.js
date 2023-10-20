import "./style.css/"

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <div>
                    <img src="././img/logo.svg" className="header__img-logo"></img>    
                </div>
                <div>
                    <a href="#" className="">
                        Лабараторная работа
                    </a>
                    <a href="#" className="">
                        Личный кабинет
                    </a>
                    <a href="#" className="">
                        Выйти
                    </a>
                </div>
            </div>
            

        </header>
     );
}
 
export default Header;