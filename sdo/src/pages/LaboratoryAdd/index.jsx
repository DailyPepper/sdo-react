import React, {useState} from "react";
import styled from 'styled-components'
import { Await, Link } from "react-router-dom";
import { Axios } from "axios";
import axios from "axios";
import { IoIosClose } from "react-icons/io";
const Section = styled.form`
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
        margin-top: 5px;
    }
    .block__one{
        margin-top: 5px;
        width: 700px;
    }
`
const MinBlock = styled.li`
    width: 592px;
    height: 102px;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 10px;
    list-style-type: none;
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
    gap: 30px;
    padding-top: ${({$PaddingTopForm}) => ($PaddingTopForm ? '10px' : '15px')};
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
        height: 100px;
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
    background-color: ${({ $Back }) => ($Back ? '#E2EDD0' : '#D5DEF6')};
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    list-style-type: none;
  .input__const{
    height: 45px;
    border-radius: 5px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    font-size: 16px;
    width: 572px;
  }
  .block__save{
    display: flex;
    gap: 45px;
  }
  .block__save-save{
    width: 265px;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .block__save-save:hover{
        background-color:#C8D5F6;
        color: #FFFFFF;
        transition: 0.5s;
  }
  .block__save-remove{
    width: 265px;
    height: 37px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .block__save-remove:hover{
    background-color: #FF7070;
    color: #FFFFFF;
    transition: 0.5s;
  }
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
    const [entryList, setEntryList] = useState("")
    const [outputList, setOutputList] = useState("")
    const [maxVariable, setMaxVariable] = useState("")
    const [maxTime, setTimeVariable] = useState("")
    const [remove,setRemove] = useState()
    //отправка формы
    const handleLabTitleChange = (event) => {
      setLabTitle(event.target.value);
    };
  
    const handleLabDescriptionChange = (event) => {
      setLabDescription(event.target.value);
    };

    const handleEntryList = (event) => {
        setEntryList(event.target.value)
    }
    const handleOutputList = (event) => {
        setOutputList(event.target.value)
    }
    //сохранения на странице 
    const [tests, setTests] = useState([]); 
    const [newTest, setNewTest] = useState({
        input: '',
        output: '',
        nameInput: '',
        format: '',
    });
    const handleInputChange = (event) => {
        setNewTest({ ...newTest, input: event.target.value });
    };
    const handleOutputChange = (event) => {
        setNewTest({ ...newTest, output: event.target.value });
    };
    const handleAddTest = () => {
        setTests([...tests, newTest, ]); 
        setNewTest({ input: '', output: '', nameInput:'', format: ''});
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTestCases = [];
        const testInputs = document.querySelectorAll('.some-input');
      
        testInputs.forEach(input => {
          const testCase = {
            input: input.value, 
            output: input.nextElementSibling.value 
          };
          newTestCases.push(testCase); 
        });
        const newData = {
          ...labData,
          lab_task: {
            ...labData.lab_task,
            task_text: labTitle,            
            name: labDescription,
            test_cases: newTestCases
          },
          lab_description: labDescription 
        };
        sendDataToServer(newData);
    };
    const [responseMessage, setResponseMessage] = useState("");

    const labData = {
        lab_task: {
          task_text: labTitle,
          functions: [
            {
              name: labDescription,
              test_cases: [
                {
                  input: ["Входные данные"],
                  output: "Ожидаемый вывод"
                }
              ],
              formulas: [
                {
                  id: "ID формулы",
                  description: "Описание формулы",
                  formula: "Формула"
                }
              ],
              linked_formulas: [
                {
                  id: "ID связанной формулы",
                  description: "Описание связанной формулы",
                  formula_ids: ["ID1", "ID2"]
                }
              ]
            }
          ],
          constructions: [
            {
              name: "Имя конструкции",
              state: true
            }
          ],
          length_checks: [
            {
              symbols: 0,
              rows: 0
            }
          ]
        }
      };
      const sendDataToServer = async (labData) => {
        try {
          const response = await axios.post("http://0.0.0.0:8000/newtask", labData);
          console.log("Ответ от сервера:", response.data);
          setResponseMessage("Лабораторная работа успешно добавлена!");
        } catch (error) {
          console.error("Ошибка при отправке запроса:", error);
          setResponseMessage("Ошибка при добавлении лабораторной работы");
        }
      }
    return ( 
        <>
        <Section onSubmit={handleSubmit}>
            <UlList>
                <List>
                    <NameLabInput 
                        type="text" 
                        placeholder="Введите назавание лабораторной работы"
                        onChange={handleLabTitleChange}
                        // onChange={(e) => setLabTitle(e.target.value)}
                        value={labTitle}
                    /> 
                </List>
                <List>
                    <div className="editing__block-Two">
                        <TitleBlock>
                            Описание лабораторной
                        </TitleBlock>
                            <p className="editing__block-text">
                                Введите описание лабораторной работы
                            </p>
                            <input 
                                className="editing__block-input" 
                                type="text" 
                                onChange={handleLabDescriptionChange}
                                placeholder="Введите текст"
                                value={labDescription}
                            />   
                    </div>
                </List> 
                <BigBlock $BigFon $BigHeight $BigWeight $GapForm>
                    <div className="block__one">
                        <TitleBlock $Padding >
                            Cписок тестов:
                        </TitleBlock> 
                            <UlMinBlock>
                            {tests.map((test, index) => (
                                <MinBlock key={index}>
                                <TitleBlock $FontSize $FontWeight $Margin>
                                    Тест {index + 1} "{test.nameInput}"
                                </TitleBlock>
                                <div className="editing__block-name">
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                        Входные данные:
                                    </TitleBlock>
                                    <input
                                        type="text"
                                        className="some-input"
                                        value={test.input}
                                        readOnly
                                    />
                                </div>
                                <div className="editing__block-name">
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                        Формат ввода:
                                    </TitleBlock>
                                    <input
                                        type="text"
                                        className="some-input"
                                        value={test.format}
                                        readOnly
                                    />
                                </div>
                                <div className="editing__block-name">
                                    <TitleBlock $FontSize $FontWeight $Margin>
                                        Вывод:
                                    </TitleBlock>
                                    <input
                                        type="text"
                                        className="some-input"
                                        value={test.output}
                                        readOnly
                                    />
                                </div>
                                    <IoIosClose className="icon" onClick={()=> setRemove('')}/>
                                </MinBlock>
                            ))}
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
                            <input 
                                type="text" 
                                className="some-input" 
                                value={newTest.nameInput} 
                                onChange={(event)=>setNewTest({ ...newTest, nameInput: event.target.value })}
                            />
                        </div>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Входные данные:
                            </TitleBlock>
                            <input
                                type="text"
                                className="some-input"
                                value={newTest.input}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Формат ввода:
                            </TitleBlock>
                            <input 
                                type="text" 
                                className="some-input" 
                                value={newTest.format}
                                onChange={(event)=>setNewTest({ ...newTest, format: event.target.value })}
                            />
                        </div>
                        <div className="editing__block-name">
                            <TitleBlock $FontSize $FontWeight>
                                Вывод:
                            </TitleBlock>
                            <input
                                type="text"
                                className="some-input"
                                value={newTest.output}
                                onChange={handleOutputChange}
                            />
                        </div>
                        <ButtonAdd $ButtonAddW onClick={handleAddTest}>
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
                                    // value={idRelatedFormula}
                                    // onChange={(event) => handleAddRelatedFormul(event,1)}
                                    placeholder="Введите формулу:"
                                 />
                            </FormBlock>
                            <div className="editing__block-bth">
                                <ButtonAddForm >
                                    Добавить формулу
                                </ButtonAddForm>
                            </div>   
                        </UlMinBlock>
                    </div>
                </BigBlock>
                    <List $Back>
                        <TitleBlock $Margin>
                            Количество переменных
                        </TitleBlock> 
                            <input 
                                type="text" 
                                className="input__const" 
                                value={maxVariable}
                                onChange={(e)=>setMaxVariable(e.target.value)}
                                placeholder="Введите максимальное количество переменных:" 
                            />
                        <div className="block__save">
                            <button 
                                className="block__save-save"
                                onClick={()=> localStorage.setItem('maxVariable', maxVariable)}
                            >
                                Сохранить
                            </button>
                            <button className="block__save-remove">
                                Удалить
                            </button>
                        </div>
                    </List>
                    <List $Back>
                        <TitleBlock $Margin>
                            Скорость работы:
                        </TitleBlock>
                            <input 
                                type="text" 
                                className="input__const" 
                                value={maxTime}
                                onChange={(e)=>setTimeVariable(e.target.value)}
                                placeholder="Введите ограничение по скорости в секундах:" 
                            />
                            <div className="block__save">
                                <button 
                                    className="block__save-save"
                                    onClick={()=> localStorage.setItem('maxTime', maxTime)}
                                >
                                    Сохранить
                                </button>
                                <button 
                                    className="block__save-remove"
                                    onClick={()=>setTimeVariable('')}
                                >
                                    Удалить
                                </button>
                            </div>
                    </List>
                <div className="block__button"> 
                    <button 
                        className="block__end" 
                        type="submit"
                        onClick={() => {
                            sendDataToServer(labData);
                            alert('Вы успешно добавили новую лабораторную работу');
                        }}>
                        <Link className="block__end-link" to='/Laboratory'>
                            Завершить редактирование и добавить лабораторную
                        </Link>
                    </button>
                    <p>{responseMessage}</p>   
                </div>
            </UlList>  
        </Section>
        </>
     );
}
 
export default LaboratoryAdd;
