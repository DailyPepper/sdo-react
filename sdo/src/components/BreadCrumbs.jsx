import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/style.css"



const Bread = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path !== '');

    // Генерация элементов хлебных крошек
    const breadcrumbs = pathNames.map((path, index) => {
        const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathNames.length - 1;
        
        return (
            <li key={index}>
                {isLast ? (
                    <span>{path}</span>
                ) : (
                    <Link to={routeTo}>{path}</Link>
                )}
            </li>
        );
    });

    return (
        <>
        <div className="block_breadCumbs">
            <nav aria-label="breadcrumbs">
                <ul className="breadcrumbs">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {breadcrumbs}
                </ul>
            </nav>
        </div>
        </> 
        
    );
}

export default Bread;
