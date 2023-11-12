import React from "react";
import "../Main/style.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Logged from "../Logged";
import { useState } from "react";
const Main = ({Logged}) => {

    const [showNav, setShowNav] = useState(false);
    const [isButtonClicked, setButtonClicked] = useState(false);
    const handleClick = ()=>{
        setButtonClicked(true)
    }
    return ( 
        <>
            <Header/>
                <section className="section">
                    {Logged ? (
                        <h1 className="section__heading">Добро пожаловать в личный кабинет!</h1>
                    ) : (
                        <>
                            <h1 className="section__heading">
                                Войдите в учетную запись или зарегистрируйтесть:
                            </h1>
                            <div className="section__block">
                                <Link className="section__block-btn" to="/login" onClick={handleClick}>
                                    Студент
                                </Link>
                                <Link className="section__block-btn" to="/login" onClick={handleClick}> 
                                    Преподователь
                                </Link>
                            </div>  
                        </>
                    )
                }
                </section>
            <Footer/>
        </>
        
     );
}
 
export default Main;