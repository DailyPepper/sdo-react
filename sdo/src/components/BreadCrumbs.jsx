import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/style.css";

const Bread = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path !== '');

   
    const pageNames = {
        "": "Главная",
        "Auto": "Авторизация", 
        "Laboratory": "Лабораторные работы", 
        "PrepodRedLab": "Редактирование лабораторной работы", 
    };


    const breadcrumbs = pathNames.map((path, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;

        const crumbClass = isLast ? "breadcrumb-last" : "link__bread";
        const pageName = pageNames[path] || path;

        return (
            <li key={index} className={`list__bread ${crumbClass}`}>
                {isLast ? (
                    <Link className="link__bread">{pageName} /</Link>
                ) : (
                    <Link to={routeTo}>{pageName}</Link>
                )}
            </li>
        );
    });

    return (
        <>
            <div>
                <nav aria-label="breadcrumbs">
                    <ul className="breadcrumbs" >
                        <li className="list__bread">
                            <Link to='/' className="link__bread">Главная /</Link>
                        </li>
                        {breadcrumbs}
                    </ul>
                </nav>
            </div>
        </> 
    );
}

export default Bread;
