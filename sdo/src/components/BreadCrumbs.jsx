import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/style.css";
import styled from 'styled-components'

const Ul = styled.ul`
    display: flex;
    gap: 15px;
    flex-direction: row;
    .list__bread{
    list-style-type: none;
    }
    .link__bread{
        text-decoration: none;
        color: #000;
        font-family: "Montserrat";
        font-size: 16px;
    }
`

const Bread = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path !== '');

   
    const pageNames = {
        "/": "Главная",
        "login": "Авторизация", 
        "laboratory": "Лабораторные работы", 
        "editingLaboratoryPrep": "Редактирование лабораторной работы", 
        "Registration" : "Регистрация",
        "profile" : "Личный кабинет",
        "LaboratoryAdd" : 'Добавить лабораторные работы',
        "PersonalTeacher" : 'Личный кабинет преподователя',
        "registration" : 'Регистрация',
        "StudLaboratory" : 'Лабораторные работы для студентов',
        "labaStud" : 'Страничка лабораторных работ',
        "attempts" : 'Страничка с тестами'
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
            <nav aria-label="breadcrumbs">
                <Ul>
                    <li className="list__bread">
                        <Link to='/' className="link__bread">Главная /</Link>
                    </li>
                    {breadcrumbs}
                </Ul>
            </nav>
        </> 
    );
}

export default Bread;
