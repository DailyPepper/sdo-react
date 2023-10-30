import { Link } from "react-router-dom";
import React from "react";

const Laboratory = () => {

    const clickDelete = (event) => {
        const listItem = event.target.parentNode;
        listItem.remove();
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder=""
                />
                <button id="buttonAdd">
                    Добавить новую Лабараторную работу
                </button>
            </div>
            <ul>
                <li>
                    <p>

                    </p>
                    <Link to="/edit">
                        Редактировать
                    </Link>
                    <button id='buttonDelete' onClick={clickDelete}>
                        Удалить
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Laboratory;
