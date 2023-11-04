import { Link } from "react-router-dom";
import React, { useState } from "react";

const Laboratory = () => {

    const handleDeleteClick = (event) => {
        const listItem = event.target.closest(".section__lab-page");
        listItem.remove();
      };

    const [searchValue, setSearchValue] = useState("")

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <div className="section__lab">
            <div className="section__lab-block">
                <div className="section__lab-blockSearch">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8724 12.4554L17.8716 16.4602C18.0502 16.6589 18.0414 16.9631 17.8516 17.1511L17.1518 17.8519C17.0579 17.9467 16.9301 18 16.7968 18C16.6635 18 16.5358 17.9467 16.4419 17.8519L12.4427 13.8471C12.332 13.7362 12.2317 13.6156 12.1427 13.4867L11.3929 12.4855C10.1521 13.4776 8.61142 14.0178 7.02368 14.0173C3.7519 14.0287 0.908851 11.7686 0.177695 8.5751C-0.553461 5.38161 1.02241 2.10699 3.97235 0.689914C6.92229 -0.727158 10.459 0.0915124 12.4886 2.66125C14.5183 5.23099 14.4992 8.86596 12.4427 11.4142L13.4425 12.105C13.5986 12.2051 13.7428 12.3226 13.8724 12.4554ZM2.02472 7.00862C2.02472 9.77337 4.26288 12.0146 7.02378 12.0146C8.34962 12.0146 9.62115 11.4872 10.5587 10.5484C11.4962 9.6096 12.0228 8.3363 12.0228 7.00862C12.0228 4.24387 9.78469 2.00259 7.02378 2.00259C4.26288 2.00259 2.02472 4.24387 2.02472 7.00862Z" fill="black"/>
                    </svg> */}
                    <input
                        type="text"
                        placeholder="Поиск"
                        value={searchValue}
                        onChange={handleSearchChange}
                        className="section__lab-input"
                        />
                    <Link id="buttonAdd" className="section__lab-button">
                        Добавить новую Лабараторную работу
                    </Link> 
                </div>
            </div>
            <ul className="section__lab-list">
                <li className="section__lab-page">
                    <p className="section__lab-name">
                        Лабараторная работа 1
                    </p>
                        <span className="section__lab-spn">
                            <Link to="/edit" className="section__lab-edit">
                                Редактировать
                            </Link>  
                            <button id='buttonDelete' onClick={handleDeleteClick} className="section__lab-btnDelete">
                                Удалить
                            </button>     
                        </span>
                        
                </li>
                <li className="section__lab-page">
                    <p className="section__lab-name">
                        Лабараторная работа 2
                    </p>
                        <span className="section__lab-spn">
                            <Link to="/edit" className="section__lab-edit">
                                Редактировать
                            </Link>  
                            <button id='buttonDelete' onClick={handleDeleteClick} className="section__lab-btnDelete">
                                Удалить
                            </button>     
                        </span>
                </li>
            </ul>
        </div>
    );
}

export default Laboratory;
