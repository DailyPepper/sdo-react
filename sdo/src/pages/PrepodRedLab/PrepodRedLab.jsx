import React from "react";
import Header from "../../components/header/Header";
// import Footer from "../../components/Footer/Footer";
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
const UlList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;

    .editing__container{
    width: 608px;
    height: 260px;
    background: #E2EDD0;
    border-radius: 7px;
    list-style-type: none;
    }
    .editing__block-Two{
    padding: 0px 35px 20px 18px;
    }
    .editing__block-text{
    color: #000;
    font-family: "Montserrat";
    font-size: 16px;
    }
    .editing__block-inp{
    display: flex;
    align-items: center;
    }
    .some-input {
        border: none;
        border-bottom: 1px solid #000;
        background-color: transparent;
        color: inherit;
        outline: none;
        margin-left: 5px;
        font-family: "Montserrat";
    }

    .editing__block-input{
        width: 515px;
        height: 60px;
        border-radius: 7px;
        border-style: none;
        color: #000;
        font-family: "Montserrat";
        font-size: 16px;
        line-height: 27px; 
        outline: none;
    }
    .editing__block-bth{
        display: flex;
        gap: 10px;
    }
` 
const List = styled.li`
    width: 608px;
    height: 260px;
    background-color: #D5DEF6;
    border-radius: 7px;
    display: flex;
    align-items: center;
    list-style-type: none;
`
const NameLab = styled.h3`
    color: #000;
    text-align: center;
    font-family: "Montserrat";
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
`
const TitleBlock = styled.h3`
    color: #000;
    font-family: "Montserrat";
    font-size: 19px;
    font-weight: 500;
    line-height: 27px;
`
const ButtonAdd = styled.button`
    font-family: "Montserrat";
    width: 274px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 0.7px solid #000;
    background: #FFF;
    height: 42px;
    cursor: pointer;
        &:hover{
            background: #C8D5F6;
            color: #FFF;
            border-style: none;
            transition: 0.5s;
        }
`
const ButtonDelete = styled.button`
    font-family: "Montserrat";
    width: 274px;
    flex-shrink: 0;
    border-radius: 4px;
    border: 0.7px solid #000;
    background: #FFF;
    cursor: pointer;
    &:hover{
        background: #FF7070;
        color: #FFF;
        border-style: none;
        transition: 0.6s;
    }
`
const PrepodRedLab = () => {
    return ( 
        <>
        <Header></Header>
        <Section>
            <UlList>
                <List>
                    <NameLab>
                        Вы находитесть в режиме редактирования: 
                        Объектно-ориентированное программирование 
                        Лабораторная работа №1 
                        “Создание программы с использованием классов”
                    </NameLab>
                </List>
                <List>
                    <div className="editing__block-Two">
                        <TitleBlock>
                            Формат ввода данных:
                        </TitleBlock>
                            <p className="editing__block-text">
                                Вы можете пояснить, как будет происходить ввод данных
                            </p>
                            <input className="editing__block-input" type="text" />   
                    </div>
                </List> 
                <li className="editing__container">
                    <div className="editing__block-Two">
                        <TitleBlock> 
                            Проверка длины:
                        </TitleBlock>
                            <div className="editing__block-inp">
                                <TitleBlock>
                                    Максимальное количество символов:
                                </TitleBlock> 
                                    <input type="text" className="some-input"/>   
                            </div>
                        <div className="editing__block-inp">
                            <TitleBlock>
                                Максимальное количество строк:
                            </TitleBlock>    
                            <input type="text" className="some-input"/>   
                        </div>
                            <div className="editing__block-bth">
                                <ButtonAdd>
                                    Добавить проверку длины
                                </ButtonAdd>
                                <ButtonDelete>
                                    Удалить
                                </ButtonDelete>
                            </div>   
                    </div>
                </li>   
                <List>
                    <div className="editing__block-Two">
                        <TitleBlock> 
                            Конструкция: 
                        </TitleBlock>
                            <input className="editing__block-input" type="text" />
                            <TitleBlock>
                                Состояние проверки
                            </TitleBlock>
                            <div className="editing__block-bth">
                                <ButtonAdd>
                                    Добавить конструкцию
                                </ButtonAdd>
                                <ButtonDelete>
                                    Удалить конструкцию
                                </ButtonDelete>
                            </div>  
                    </div>
                </List> 
            </UlList>  
        </Section>
        
        {/* <Footer></Footer> */}
        </>
     );
}
 
export default PrepodRedLab
