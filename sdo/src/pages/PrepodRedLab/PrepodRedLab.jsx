import React from "react";
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
const BigBlock = styled.div`
    width: ${({$BigWeight}) => ($BigWeight ? '1248px' : '1247px')};
    height: ${({$BigHeight}) => ($BigHeight ? '406px' : '357px')};
    background-color: ${({$BigFon}) => ($BigFon ? '#E2EDD0' : '#D5DEF6')};
    border-radius: 10px;
    display: flex;
    gap: 75px;
    .block__test{
        width: 400px;
        padding-left: 50px;
    }
`
const MinBlock = styled.div`
    width: 592px;
    height: 102px;
    border-radius: 10px;
    background-color: #FFFFFF;

`
const UlMinBlock = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
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
        padding: 0px 30px 0px 20px;
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
    .editing__block{
        padding: 0px 30px 0px 20px;
        display: flex;
        gap: 75px;
        align-items: baseline;
    }
    .editing__block-name{
        display: flex;
        align-items: baseline;
    }
` 
const List = styled.li`
  width: ${({ $Block }) => ($Block ? '1248px' : '608px')};
  height: ${({ $Block }) => ($Block ? '59px' : '260px')};
  background-color: ${({ $Block }) => ($Block ? '#D9D9D9' : '#D5DEF6')};
  border-radius: 7px;
  display: flex;
  align-items: center;
  list-style-type: none;
`;
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
    font-size: ${({$FontSize}) => ($FontSize ? '16px' : '19px')};
    font-weight: ${({$FontWeight}) => ($FontWeight ? '400' : '500')};
    line-height: 27px;
    padding-left: ${({$Padding}) => ($Padding ? '45px' : '0px')};
    /* width: ${({$Width}) => ($Width ? '194px' : '221px')}; */
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
                <li className="editing__container">
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
                </li> 
                <List $Block>
                    <div className="editing__block">
                        <TitleBlock >
                            Функция 1
                        </TitleBlock>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Название:
                            </TitleBlock> 
                                <input type="text" className="some-input"/>     
                        </div>  
                    </div>
                </List>
                <BigBlock $BigFon $BigHeight $BigWeight>
                    <div>
                        <TitleBlock $Padding>
                            Cписок тестов:
                        </TitleBlock> 
                            <UlMinBlock>
                                <MinBlock>
                                    <div>
                                        <TitleBlock $FontSize $FontWeight >
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight>  
                                            Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                    </div>
                                
                                </MinBlock>
                                <MinBlock>
                                    
                                </MinBlock>
                                <MinBlock>
                                    
                                </MinBlock>   
                            </UlMinBlock>
                        
                    </div>
                    <div className="block__test">
                        <TitleBlock>
                            Добавить новый тест:    
                        </TitleBlock> 
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Введите название теста:
                            </TitleBlock> 
                                <input type="text" className="some-input"/>     
                        </div>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Входные данные:
                            </TitleBlock> 
                                <input type="text" className="some-input"/>     
                        </div>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Вывод:
                            </TitleBlock> 
                                <input type="text" className="some-input"/>     
                        </div>
                        <button>
                            Добавить тест
                        </button>
                    </div>
                </BigBlock>
                <BigBlock >

                </BigBlock>
            </UlList>  
        </Section>
        </>
     );
}
 
export default PrepodRedLab
