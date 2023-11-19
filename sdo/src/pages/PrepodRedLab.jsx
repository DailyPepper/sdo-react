import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PrepodRedLab = () => {
    return ( 
        <>
        <Header></Header>
        <section className="section__editing">
            <div className="editing__blocks">
                <div className="editing__block">
                    <h3 className="editing__block-heading">
                        Вы находитесть в режиме редактирования: 
                        Объектно-ориентированное программирование 
                        Лабораторная работа №1 
                        “Создание программы с использованием классов”
                    </h3>
                </div>
                <div className="editing__block">
                    <div className="editing__block-Two">
                        <h3 className="editing__block-title">
                            Формат ввода данных:
                        </h3>
                            <p className="editing__block-text">
                                Вы можете пояснить, как будет происходить ввод данных
                            </p>
                            <input className="editing__block-input" type="text" />   
                    </div>
                </div> 
                <div className="editing__container">
                    <div className="editing__block-Two">
                        <h3 className="editing__block-title"> 
                            Проверка длины:
                        </h3>
                        <div className="editing__block-inp">
                            <p className="editing__block-title">
                                Максимальное количество символов:
                            </p> 
                            <input type="text" className="some-input"/>   
                        </div>
                        <div className="editing__block-inp">
                            <p className="editing__block-title">
                                Максимальное количество строк:
                            </p>    
                            <input type="text" className="some-input"/>   
                        </div>
                        
                        <div className="editing__block-bth">
                            <button className="editing__block-bthAdd">
                                Добавить проверку длины
                            </button>
                            <button className="editing__block-btnDel">
                                Удалить
                            </button>
                        </div>   
                    </div>
                    
                </div>   
                <div className="editing__container">
                    <h3 className="editing__block-title"> 
                        Проверка длины:
                    </h3>
                    <p className="editing__block-title">
                        Максимальное количество символов:
                    </p>
                    <p className="editing__block-title">
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
                </div> 
            </div>
            
        </section>
        
        {/* <Footer></Footer> */}
        </>
     );
}
 
export default PrepodRedLab
