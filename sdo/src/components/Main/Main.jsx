import React from "react";
import "../Main/style.css";
import { Link } from "react-router-dom";

const Main = () => {
    return ( 
        <section className="section">
            <h1 className="section__heading">
                Войдите в учетную запись или зарегистрируйтесть:
            </h1>
            <div className="section__block">
                <Link className="section__block-btn" to="/login">
                    Студент
                </Link>
                <Link className="section__block-btn" to="/login"> 
                    Преподователь
                </Link>
            </div>
        </section>
     );
}
 
export default Main;