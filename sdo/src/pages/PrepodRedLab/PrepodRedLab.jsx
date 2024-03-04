import React, {useState} from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
const BigBlock = styled.div`
    width: ${({$BigWeight}) => ($BigWeight ? '1248px' : '1247px')};
    height: ${({$BigHeight}) => ($BigHeight ? '530px' : '375px')};
    background-color: ${({$BigFon}) => ($BigFon ? '#E2EDD0' : '#D5DEF6')};
    border-radius: 10px;
    display: flex;
    gap: ${({$GapForm}) => ($GapForm ? '75px' : '0px')};
    .block__test{
        width: 540px;
        display: flex;
        flex-direction: column;
    }
    .block__one{
        margin-top: 15px;
    }
`
const MinBlock = styled.li`
    width: 592px;
    height: 102px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 10px;
    list-style-type: none;
    margin-top: 27px;
    position: relative;

    .icon{
        position: absolute;
        top: 5px;
        right: 10px;
        cursor: pointer;
    }
`
const UlMinBlock = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: ${({$PaddingTopForm}) => ($PaddingTopForm ? '10px' : '5px')};
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
        display: flex;
        align-items: center;
    }
    .editing__block-Two{
        padding: 0px 30px 30px 20px;
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
        width: 555px;
        height: 110px;
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
        /* padding-left: 5px; */
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
    .block__button{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .block__end{
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: #E2EDD0;
        border-radius: 5px;
        width: 1248px;
        height: 117px;
        justify-content: center;
        border-style: none;
        align-items: center;
        cursor: pointer;
        &:hover{
            background-color: #d7ebb5eb;
        }
    }
    .block__end-link{
        color: #000;
        font-size: 16px;
        font-family: 'Montserrat';
        line-height: 27px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        width: 1248px;
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
    font-size: ${({$FontSize}) => ($FontSize ? '16px' : '19px')};
    font-weight: ${({$FontWeight}) => ($FontWeight ? '400' : '500')};
    line-height: ${({$LineHeight}) => ($LineHeight ? '45px' : '27px')};
    padding-left: ${({$Padding}) => ($Padding ? '45px' : '0px')};
    margin: ${({$Margin}) => ($Margin ? '0px' : 'none')};
`

const ButtonAdd = styled.button`
    font-family: "Montserrat";
    width: ${({$ButtonAddW}) => ($ButtonAddW ? '400px' : '274px') };
    flex-shrink: 0;
    border-radius: 4px;
    border: none;
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
const ButtonAddForm = styled.button`
    font-family: "Montserrat";
    width: 490px;
    flex-shrink: 0;
    border-radius: 4px;
    background: #FFF;
    height: 42px;
    border: none;
    margin-left: 5px;
    cursor: pointer;
        &:hover{    
            background: #C8D5F6;
            color: #FFF;
            border-style: none;
            transition: 0.5s;
        }
`
const FormBlock = styled.li`
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 2px;
`
const FormInput = styled.input`
    height: 45px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    font-size: 16px;
`

const PrepodRedLab = () => {
    const [inputValueSimbol, setInputValueSimbol] = useState('')
    const [inputValueStr, setInputValueStr] = useState('')
    const [lengthInput, setLengthInput] = useState([])
    const [addConstr, setAddConstr] = useState('')
    const [addConstrBtn, setAddConstrBtn] = useState([])

    const handleAddConstr = (event) => {
        setAddConstr(event.target.value)
    }

    const handleAddConstrBtn = () => {
        if(addConstr.trim !== ''){
            const newConstr = [...addConstrBtn, addConstr]
            
            setAddConstrBtn(newConstr)
            setAddConstr('')
        }
    }

    const handleDeleteConstr = () => {
        setAddConstr('')
    }

    const handleChange = (event, inputNumber) => {
        const newValue = event.target.value;
        if ((inputNumber === 1 && newValue !== inputValueStr) || 
            (inputNumber === 2 && newValue !== inputValueSimbol)) {
                inputNumber === 1 ? setInputValueSimbol(newValue) : setInputValueStr(newValue);
            }
    }
    const handleDelete = () => {
        setInputValueSimbol('')
        setInputValueStr('')
    }

    const handleAddLengthCheck = () => {
        const newCheck = {
            symbolLength: inputValueSimbol.length,
            stringLength: inputValueStr.length,
        };
        setLengthInput([...lengthInput, newCheck]);

        setInputValueSimbol('');
        setInputValueStr('');
    }

    const [idFormula, setIdFormula] = useState('');
    const [descriptionFormula, setDescriptionFormula] = useState('');
    const [formula, setFormula] = useState('');
    const [addFormula, setAddFormula] = useState([])
    
    const [idRelatedFormula, setIdRelatedFormula] = useState('');
    const [descriptionRelatedFormula, setDescriptionRelatedFormula] = useState('');
    const [formulaRelated, setRelatedFormula] = useState('');
    const [addRelatedFormula, setAddRelatedFormula] = useState([])
    
    const handleAddFormul = (event, inputFormul) => {
        const newFormulaValue = event.target.value;
        if (inputFormul === 1) {
            setIdFormula(newFormulaValue);
        } else if (inputFormul === 2) {
            setDescriptionFormula(newFormulaValue);
        } else if (inputFormul === 3) {
            setFormula(newFormulaValue);
        }
    };
      
    const handleAddFormulBtn = () => {
        const newFormul = {
            idForm: idFormula.length,
            descriptionForm: descriptionFormula.length,
            Form: formula.length,
        };
        setAddFormula([...addFormula, newFormul]);
        setIdFormula('');
        setDescriptionFormula('');
        setFormula('');
    };

    const handleDelFormulBtn = () => {
        setIdFormula('')
        setDescriptionFormula('')
        setFormula('')
    }

    const handleAddRelatedFormul = (event, inputFormulRelated) => {
        const newFormulaRelatedValue = event.target.value;
        if (inputFormulRelated === 1) {
            setIdRelatedFormula(newFormulaRelatedValue);
        } else if (inputFormulRelated === 2) {
            setDescriptionRelatedFormula(newFormulaRelatedValue);
        } else if (inputFormulRelated === 3) {
            setRelatedFormula(newFormulaRelatedValue);
        }
    };
      
    const handleAddFormulRelatedBtn = () => {
        const newFormulRelated = {
            idForm: idFormula.length,
            descriptionForm: descriptionFormula.length,
            Form: formula.length,
        };
        setAddRelatedFormula([...addRelatedFormula, newFormulRelated]);
        setIdRelatedFormula('');
        setDescriptionRelatedFormula('');
        setRelatedFormula('');
    };

    const handleDelFormulRelatedBtn = () => {
        setIdRelatedFormula('')
        setDescriptionRelatedFormula('')
        setRelatedFormula('')
    }

    const [test, setTest] = useState([])

    const handleTestDelete = (index) => {
        const updateTest = [...test]
        updateTest.splice(index, 1)
        setTest(updateTest)
    } 

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
                            <input className="editing__block-input" type="text" placeholder="Введите текст"/>   
                    </div>
                </List> 
                <BigBlock $BigFon $BigHeight $BigWeight $GapForm>
                    <div className="block__one">
                        <TitleBlock $Padding $Margin>
                            Cписок тестов:
                        </TitleBlock> 
                            <UlMinBlock>
                                <MinBlock>
                                        <TitleBlock $FontSize $FontWeight $Margin>
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>  
                                            Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                        <IoIosClose className="icon" onClick={()=>handleTestDelete(index)}/>
                                </MinBlock>
                                <MinBlock>
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>  
                                                Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                        <IoIosClose className="icon"/>
                                </MinBlock>
                                <MinBlock>
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>  
                                                Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                        <IoIosClose className="icon"/>
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
                        <ButtonAdd $ButtonAddW>
                            Добавить тест
                        </ButtonAdd>
                    </div>
                </BigBlock>
                <BigBlock >
                <div className="block__one">
                        <TitleBlock $Padding $Margin>
                            Cписок тестов:
                        </TitleBlock> 
                            <UlMinBlock>
                                <MinBlock>
                                        <TitleBlock $FontSize $FontWeight $Margin>
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>  
                                            Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                        <IoIosClose className="icon" />
                                </MinBlock>
                                <MinBlock>  
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                            Тест 1 "Проверка на ..."
                                        </TitleBlock>
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>
                                                Входные данные:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div>  
                                        <div className="editing__block-name">
                                            <TitleBlock $FontSize $FontWeight  $Margin>  
                                                Вывод:
                                            </TitleBlock> 
                                                <input type="text" className="some-input"/>     
                                        </div> 
                                        <IoIosClose className="icon" />
                                </MinBlock>  
                            </UlMinBlock>
                    </div>
                    <div className="block__test">
                        <TitleBlock $Padding>
                            Формулы
                        </TitleBlock> 
                        <UlMinBlock >
                            <FormBlock>
                                <FormInput 
                                    type="text"
                                    value={idRelatedFormula}
                                    onChange={(event) => handleAddRelatedFormul(event,1)}
                                    placeholder="Введите формулу:"
                                 />
                            </FormBlock>
                            <div className="editing__block-bth">
                                <ButtonAddForm onClick={handleAddFormulRelatedBtn}>
                                    Добавить формулу
                                </ButtonAddForm>
                            </div>   
                        </UlMinBlock>
                    </div>
                </BigBlock>
                <div className="block__button"> 
                    <button className="block__end">
                        <Link className="block__end-link" to='/Laboratory'>
                            Завершить редактирование и добавить лабораторную
                        </Link>
                    </button>   
                </div>
            </UlList>  
        </Section>
        </>
     );
}
 
export default PrepodRedLab
