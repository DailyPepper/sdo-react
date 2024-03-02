import React, {useState} from "react";
import styled from 'styled-components'
import { Await, Link } from "react-router-dom";
import Laboratory from "../Laboratory/Laboratory";
import { Axios } from "axios";
const Section = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
`
const BigBlock = styled.div`
    width: ${({$BigWeight}) => ($BigWeight ? '1248px' : '1247px')};
    height: ${({$BigHeight}) => ($BigHeight ? '425px' : '357px')};
    background-color: ${({$BigFon}) => ($BigFon ? '#E2EDD0' : '#D5DEF6')};
    border-radius: 10px;
    display: flex;
    gap: ${({$GapForm}) => ($GapForm ? '75px' : '0px')};
    .block__test{
        width: 540px;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }
    .block__one{
        margin-top: 5px;
    }
`
const MinBlock = styled.li`
    width: 592px;
    height: 102px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 10px;
    list-style-type: none;
`
const UlMinBlock = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: ${({$PaddingTopForm}) => ($PaddingTopForm ? '10px' : '0px')};
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
    width: 275px;
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
const ButtonDelete = styled.button`
    font-family: "Montserrat";
    width: 268px;
    flex-shrink: 0;
    border-radius: 4px;
    border: none;
    background: #FFF;
    
    cursor: pointer;
        &:hover{
            background: #FF7070;
            color: #FFF;
            border-style: none;
            transition: 0.6s;
        }
`
const FormBlock = styled.li`
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 2px;
`
const FormLabel = styled.label`
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 27px;
    font-weight: 400;
    color: #000000;
`
const FormInput = styled.input`
    width: 550px;
    height: 30px;
    border-radius: 10px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    font-size: 16px;
`
const ButtonFun = styled.button`
    background-color: #D9D9D9;
    width: 1248px;
    height: 48px;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: 400px;

    &:hover{
        background-color: ${({$HoverButton}) => ($HoverButton ? '#C8D5F6' : '#FF7070')};
        color: #FFFFFF;
        transition: 0.5s;
    }
`
const NameLabInput = styled.input`
    display: flex;
    border: none;
    background: none;
    width: 608px;
    height: 260px;
    font-size: 18px;
    padding: 0px 0px 0px 30px;
    outline: none;
`

const LaboratoryAdd = () => {
    const [labTitle, setLabTitle] = useState("");
    const [labDescription, setLabDescription] = useState("");
    const [functions, setFunctions] = useState([]);
    const [constructions, setConstructions] = useState([]);
    const [symbols, setSymbols] = useState(0);
    const [rows, setRows] = useState(0);
  
    const handleLabTitleChange = (event) => {
      setLabTitle(event.target.value);
    };
  
    const handleLabDescriptionChange = (event) => {
      setLabDescription(event.target.value);
    };
  
    const handleFunctionInputChange = (event, index) => {
      const updatedFunctions = [...functions];
      updatedFunctions[index][event.target.name] = event.target.value;
      setFunctions(updatedFunctions);
    };
  
    const handleTestCaseInputChange = (event, funcIndex, testCaseIndex) => {
      const updatedFunctions = [...functions];
      updatedFunctions[funcIndex].test_cases[testCaseIndex][event.target.name] = event.target.value;
      setFunctions(updatedFunctions);
    };
  
    const handleFormulaInputChange = (event, funcIndex, formulaIndex) => {
      const updatedFunctions = [...functions];
      updatedFunctions[funcIndex].formulas[formulaIndex][event.target.name] = event.target.value;
      setFunctions(updatedFunctions);
    };
  
    const handleLinkedFormulaInputChange = (event, funcIndex, linkedFormulaIndex) => {
      const updatedFunctions = [...functions];
      updatedFunctions[funcIndex].linked_formulas[linkedFormulaIndex][event.target.name] = event.target.value;
      setFunctions(updatedFunctions);
    };
  
    const handleConstructionInputChange = (event, index) => {
      const updatedConstructions = [...constructions];
      updatedConstructions[index][event.target.name] = event.target.value;
      setConstructions(updatedConstructions);
    };
  
    const handleLengthCheckInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      if (name === "symbols") {
        setSymbols(value);
      } else if (name === "rows") {
        setRows(value);
      }
    };
  
    const handleSaveLabData = async () => {
        const labData = {
          lab_task: {
            task_text: labDescription,
            functions,
            constructions,
            length_checks: {
              symbols,
              rows,
            },
          },
        };
      
        try {
          const response = await Axios.post(
            'http://0.0.0.0:8000/docs#/newtask',
            labData
          );
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error during lab data save:', error);
          return { error: 'Failed to save lab data' };
        }
      };
    
      const handleSaveTaskPyTest = async (data) => {
        return Axios.post('http://0.0.0.0:8000/docs#/newTaskPyTest',data)
      } 



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

    return ( 
        <>
        <Section>
            <UlList>
                <List>
                    <NameLabInput 
                        type="text" 
                        placeholder="Введите назавание лабораторной работы"
                        onChange={handleLabTitleChange}
                    /> 
                </List>
                <List>
                    <div className="editing__block-Two">
                        <TitleBlock>
                            Формат ввода данных:
                        </TitleBlock>
                            <p className="editing__block-text">
                                Вы можете пояснить, как будет происходить ввод данных
                            </p>
                            <input 
                                className="editing__block-input" 
                                type="text" 
                                onChange={handleLabDescriptionChange}
                                placeholder="Введите текст"
                            />   
                    </div>
                </List> 
                <li className="editing__container">
                    <div className="editing__block-Two">
                        <TitleBlock > 
                            Проверка длины:
                        </TitleBlock>
                            <div className="editing__block-inp">
                                <TitleBlock >
                                    Максимальное количество символов:
                                </TitleBlock> 
                                    <input 
                                        type="text" 
                                        className="some-input" 
                                        value={inputValueSimbol} 
                                        onChange={(event) => handleChange(event,1)}
                                    />   
                            </div>
                        <div className="editing__block-inp">
                            <TitleBlock>
                                Максимальное количество строк:
                            </TitleBlock>    
                                <input 
                                    type="text" 
                                    className="some-input" 
                                    value={inputValueStr} 
                                    onChange={(event) => handleChange(event,2)}
                                />   
                        </div>
                            <div className="editing__block-bth">
                                <ButtonAdd onClick={handleAddLengthCheck}>
                                    Добавить проверку длины
                                </ButtonAdd>
                                <ButtonDelete onClick={handleDelete}>
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
                            <input 
                                className="editing__block-input" 
                                type="text"
                                value={addConstr}
                                onChange={handleAddConstr}
                                placeholder="Введите конструкцию"
                            />
                            <TitleBlock >
                                Состояние проверки
                            </TitleBlock>
                            <div className="editing__block-bth">
                                <ButtonAdd onClick={handleAddConstrBtn}>
                                    Добавить конструкцию
                                </ButtonAdd>
                                <ButtonDelete onClick={handleDeleteConstr}>
                                    Удалить конструкцию
                                </ButtonDelete >
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
                        <TitleBlock $Padding>
                            Формулы
                        </TitleBlock> 
                        <UlMinBlock >
                            <FormBlock>
                                <FormLabel htmlFor="Id формулы">ID формулы</FormLabel>
                                <FormInput 
                                    type="text" 
                                    value={idFormula}
                                    onChange={(event) => handleAddFormul(event,1)}
                                />
                            </FormBlock>
                            <FormBlock>
                                <FormLabel htmlFor="Описание формулы">Описание формулы</FormLabel>
                                <FormInput 
                                    type="text"
                                    value={descriptionFormula}
                                    onChange={(event) => handleAddFormul(event,2)}
                                />
                            </FormBlock>
                            <FormBlock>
                                <FormLabel htmlFor="Формула">Формула</FormLabel>
                                <FormInput 
                                    type="text" 
                                    value={formula}
                                    onChange={(event) => handleAddFormul(event,3)}
                                />
                            </FormBlock>
                            <div className="editing__block-bth">
                                <ButtonAddForm onClick={handleAddFormulBtn}>
                                    Добавить формулу
                                </ButtonAddForm>
                                <ButtonDelete onClick={handleDelFormulBtn}>
                                    Удалить формулу
                                </ButtonDelete>
                            </div>   
                        </UlMinBlock>
                    </div>
                    <div className="block__test">
                        <TitleBlock $Padding>
                            Связанные формулы
                        </TitleBlock> 
                        <UlMinBlock >
                            <FormBlock>
                                <FormLabel htmlFor="Id формулы">ID связанной формулы</FormLabel>
                                <FormInput 
                                    type="text"
                                    value={idRelatedFormula}
                                    onChange={(event) => handleAddRelatedFormul(event,1)}
                                 />
                            </FormBlock>
                            <FormBlock>
                                <FormLabel htmlFor="Описание формулы">Описание связанных формулы</FormLabel>
                                <FormInput 
                                    type="text"
                                    value={descriptionRelatedFormula}
                                    onChange={(event) => handleAddRelatedFormul(event,2)}
                                />
                            </FormBlock>
                            <FormBlock>
                                <FormLabel htmlFor="Формула">ID формул (через запятую, без пробелов)</FormLabel>
                                <FormInput 
                                    type="text"
                                    value={formulaRelated}
                                    onChange={(event) => handleAddRelatedFormul(event,3)}
                                />
                            </FormBlock>
                            <div className="editing__block-bth">
                                <ButtonAddForm onClick={handleAddFormulRelatedBtn}>
                                    Добавить формулу
                                </ButtonAddForm>
                                <ButtonDelete onClick={handleDelFormulRelatedBtn}>
                                    Удалить формулу
                                </ButtonDelete>
                            </div>   
                        </UlMinBlock>
                    </div>
                </BigBlock>
                <div className="block__button">
                    <div className="editing__block-name">
                        <ButtonFun $HoverButton onClick={handleSaveTaskPyTest}>
                            Добавить функцию 
                        </ButtonFun>   
                    </div>
                    <div className="editing__block-name">
                        <ButtonFun>
                            Удалить предыдущую функцию    
                        </ButtonFun>   
                    </div>   
                </div>
                <div className="block__button"> 
                    <button className="block__end" onClick={handleSaveLabData}>
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
 
export default LaboratoryAdd;