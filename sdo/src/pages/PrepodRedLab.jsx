import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PrepodRedLab = () => {
    return ( 
        <>
        <Header></Header>
        <section>
            <div className="editing__block">
                <div className="editing__block-name">
                    <h3 className="editing__block-title">
                        Вы находитесть в режиме редактирования: 
                        Объектно-ориентированное программирование 
                        Лабораторная работа №1 
                        “Создание программы с использованием классов”
                    </h3>
                </div>
                <div>
                    <h3>
                        Формат ввода данных:
                    </h3>
                    <p>
                        Вы можете пояснить, как будет происходить ввод данных
                    </p>
                    <input type="text" />
                </div> 
                {/* <div>
                    <h3>
                        Проверка длины:
                    </h3>
                    <p>
                        Максимальное количество символов:
                    </p>
                    <p>
                        Максимальное количество строк:
                    </p>
                    <div>
                        <button>
                            Добавить проверку длины
                        </button>
                        <button>
                            Удалить
                        </button>
                    </div>
                </div>    */}
            </div>
            
        </section>
        
        <Footer></Footer>
        </>
     );
}
 
export default PrepodRedLab
