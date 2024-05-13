import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { tests, checkStatus } from './Test';

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 8%;
    gap: 35px;
    padding-top: 2%;
    .block__test{
        width: 1294px;
        background-color: #E2EDD0;
        height: 85px;
        border-radius: 10px;
        margin-top: 5px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`

const Attempt = styled.div`
    width: 294px;
    height: 64px;
    background-color: #D9D9D9;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat';
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat';
`

const Block = styled.div`
    width: 1294px;
    height: ${({ $height }) => $height ? '585px' : '196px'};
    background-color: #D5DEF6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .block__ul{
        display: flex;
        align-items: center;
        justify-content: center;    
        flex-direction: column;
        gap: 15px;
    }
`
const Ul = styled.ul`
    justify-content: center;
    align-items: center;
    gap: 65px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const Li = styled.li`
    width: 320px;
    height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Montserrat';
`
const LiStatus = styled.li`
    width: 1000px;
    height: 55px;
    border-radius: 10px;
    background-color: ${({ status }) => status === 'WA' ? '#FF0000' : '#ffffff'};
    list-style-type: none;
    display: flex;
    justify-content: space-around;
`
const Span = styled.span`
    width: 426px;
    height: 45px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s, color 0.5s;
    :hover {
        background-color: #C8D5F6;
        color: #FFFFFF;
        width: 426px;
        height: 45px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.7s;
    }
    a {
        text-decoration: none;
        color: #000000;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Montserrat';
    }
`;

const Attempts = () => {
    const {id} = useParams()
    const [hasWAStatus, setHasWAStatus] = useState(false);

    useEffect(() => {
        const hasWA = tests.some(test => test.status === 'WA');
        setHasWAStatus(hasWA);
    }, []);

    return (
        <>
            <Section>
                <Attempt>
                    Попытки 2
                </Attempt>
                <Block $height>
                    <Ul>
                        {tests.map((test, index) => (
                            <>
                                <Li key={index}>
                                    Номер теста: {test.number}
                                </Li>
                                <Li>
                                    Время выполнения: {test.time} секунд
                                </Li>
                                <Li>
                                    Статус: {checkStatus(test.status)}
                                </Li>
                            </>
                        ))}
                    </Ul>
                    {/* <div className="block__test"></div> */}
                </Block>
                <Block>
                    <ul className="block__ul">
                        {tests.slice(0, 3).map((test, index) => (
                            <LiStatus key={index} status={test.status}>
                                <Text>Попытка {test.number}</Text>
                                <Text>Статус: {checkStatus(test.status)}</Text>
                            </LiStatus>
                        ))}
                    </ul>
                </Block>
                <div className="block__test">
                    <Span>
                        <Link to={`/labaStud/${id}`}>Назад к лабораторной</Link>
                    </Span>
                    <Span>
                        <Link to='/Laboratory'>Перейти на главную страницу</Link>
                    </Span>
                </div>
            </Section>
        </>
    );
}

export default Attempts;
