import React from "react";
import "../Main/style.css";

const Main = () => {
    return ( 
        <section className="section">
            <h1 className="section__heading">
                Войдите в учетную запись или зарегистрируйтесть:
            </h1>
            <div className="section__block">
                <a className="section__block-btn" href="#">
                    Студент
                </a>
                <a className="section__block-btn" href="#"> 
                    Преподователь
                </a>
            </div>
        </section>
     );
}
 
export default Main;