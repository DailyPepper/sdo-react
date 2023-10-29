import { Link } from "react-router-dom";

const Laboratory = () => {

    const btnDelete = document.addEventListener('buttonDelete');
    const btnAdd = document.addEventListener('buttonAdd');

    

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
                    <Link>
                        Редактировать
                    </Link>
                    <button id='buttonDelete'>
                        Удалить
                    </button>
                </li>
            </ul>
        </div>
     );
}
 
export default Laboratory;