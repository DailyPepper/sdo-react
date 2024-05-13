    import { Link, useLocation } from "react-router-dom";
    import React, { useState, useEffect } from "react";
    import "../../styles/style.css";
    import styled from 'styled-components'

    const SectionLab = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 25px 0px 20px;
        .section__lab-blockSearch{
        display: flex;
        gap: 10px;
        align-items: center;
        }
        .section__lab-input{
            width: 290px;
            height: 26px;
            padding: 10px;
            background: #F0F0F0;
            border-style: none;
            border-radius: 4px;
            font-size: 16px;
        }
        .section__lab-input:focus{
            outline-width: 0;
        }
        .section__lab-block{
            padding-left: 2%;
        }

        .section__lab-button{
            width: 285px;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            color: #000;
            font-family: 'Montserrat';
            line-height: 27px;
            text-decoration: none;
            background: #F0F0F0;
            border-style: none;
            border-radius: 4px;
            font-size: 10px;
        }
        .section__lab-btn{
            width: 280px;
            padding: 10px;
            font-size: 16px;
            text-align: center;
            color: #000;
            font-family: 'Montserrat';
            line-height: 27px;
            text-decoration: none;
            background: #F0F0F0;
            border-style: none;
            border-radius: 4px;
        }
        .section__lab-button:hover{
            background: #C8D5F6;
            color: #FFF;
            transition: 0.5s;
        }
        .alternate-color{
            background: rgba(216, 216, 216, 0.38);
        }   

    `
const NameLab = styled.p`
        color: #000;
        text-align: center;
        font-family: 'Montserrat';
        font-size: 19px;
        padding-left: 5%;
`
    const ListLab = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 10px;
        .section__lab-number{
            width: 1246px;
            height: 120px;
            background: rgba(226, 237, 208, 0.55);
            border-radius: 10px;
            list-style: none;
            display: flex;
            align-items: center;
        }
        .list__link{
            text-decoration: none;
        }
`
const StudLaboratory = () => {
    const [labItems, setLabItems] = useState({ isLoading: true, data: [] });
    const [searchValue, setSearchValue] = useState("");

    const history = useLocation();

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleDeleteClick = (index) => {
        const updatedLabItems = [...labItems.data];
        updatedLabItems.splice(index, 1);
        setLabItems((prev) => ({ ...prev, data: updatedLabItems }));
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLabItems((prev) => ({ ...prev, isLoading: false }));
        }, 5000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
        // useEffect(()=>{
        //     setLabItems(prev => ({
        //         ...prev,

        //     }))
        // },[])

        useEffect(() => {
            fetch('http://0.0.0.0:8002/tasks', {
              method: 'GET',
              headers: {
                'accept': 'application/json'
              }
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch tasks");
                }
            })
            .then((data) => {
                const tasksArray = Object.keys(data).map((key) => ({
                    id: key,
                    description: data[key],
                }));
                setLabItems({ isLoading: false, data: tasksArray });
            })
              .catch(error => {
                console.error(error.message);
              });
          }, []);        
    
        const getColors = (index) => {
            return index % 2 === 0 ? "section__lab-number" : "section__lab-number alternate-color"
        }; 
        const handleLabClick = (id) => {
            history.push(`/labaStud/${id}`);
          };
        return (
                <>
                    <SectionLab>
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
                                <Link id="buttonAdd" className="section__lab-btn">
                                    Все лабораторные
                                </Link>
                                <Link id="buttonAdd" className="section__lab-btn">
                                    Выполнено                            
                                </Link>
                                <Link id="buttonAdd" className="section__lab-btn">
                                    Не выполнено
                                </Link>
                            </div>
                        </div>
                        <ListLab>
                        {labItems.isLoading ? (
                    <p>Loading...</p>
                ) : (
                    labItems.data.map((labTitle) => (
                        <Link className="list__link" to={`/labaStud/${labTitle.id}`} key={labTitle.id}>
                        <li className={getColors()} onClick={() => handleLabClick(labTitle.id)}>
                            <NameLab>{labTitle.description}</NameLab>
                        </li>
                        </Link>
                    )).reverse()
                )}
                        </ListLab>
                    </SectionLab>
                </>
        );
    }

    export default StudLaboratory;
