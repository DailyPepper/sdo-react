import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Bread = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path)=> path !== '');

    return ( 
        <nav aria-label="breadcrumbs">
            <ul className="breadcrumbs">
                <li>
                    <Link to='/'>Home</Link>
                </li>
            
            </ul>
        </nav>
     );
}
 
export default Bread;