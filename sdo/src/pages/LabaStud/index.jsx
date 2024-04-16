import React from "react";
import styled from "styled-components";
import FileUploadButton from './Button'
import { Link } from "react-router-dom";
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 30px;
        .block__pop{
            width: 1248px;
            height: 156px;
            background-color: #D9D9D9;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
`
const Block = styled.div`
    width: 1248px;
    height: ${({ $Height }) => ($Height ? '556px' : '267px')};
    background-color: ${({ $Fon }) => ($Fon ? '#D5DEF6' : '#E2EDD0')};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: ${({ $Center }) => ($Center ? 'flex-start' : 'center')};
    justify-content: center;
    gap: ${({$gap}) => $gap ? '25px' : '0'};
`
const Button = styled.button`
    width: 1098px;
    height: 75px;
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
    border-radius: 10px;
    border-style: none;
    font-family: 'Montserrat';
    font-size: 16px;
`
const Task = styled.h2`
    font-family: 'Montserrat';
    font-size: 16px;
    line-height: 27px;
    font-weight: 400;
    width: 1098px;
    height: 63px;
`
const Span = styled.span`
    padding-left: 7%;
`
const Text = styled.p`
    font-family: 'Montserrat';
    font-size: 16px;  
    font-size:${({$size}) => ($size ? '18px' : '16px')} ;
    font-weight: ${({$bold}) => ($bold ? 'bold' : '')};
    color: #000000;
`
const LabaStud = () => {
    return ( 
        <>
            <Section>
                <Block $Height $Fon $Center >
                    <Span>
                        <Task>
                            Даны три целых числа. Найдите наибольшее из них (программа должна вывести ровно одно целое число). Под наибольшим в этой задаче понимается число, которое не меньше, чем любое другое.
                        </Task>   
                    </Span>
                    <Span>
                        <Text $size $bold>
                            Формат входных данных
                        </Text>
                            <Text>
                                Вводятся три числа.
                            </Text>
                                <Text $size $bold>
                                    Формат входных данных
                                </Text>
                                    <Text>
                                        Вводятся три числа.
                                    </Text>
                                        <Text $size $bold>
                                            Sample Input:
                                        </Text>
                                            <Text>
                                                1 2 3
                                            </Text>
                                                <Text $size $bold>
                                                    Sample Output:
                                                </Text>
                                                    <Text>
                                                        3
                                                    </Text>   
                    </Span>
                </Block>
                <Block $gap>
                    <FileUploadButton/>
                </Block>
                <div className="block__pop">
                    <Link to='/attempts'>
                        Мои попытки
                    </Link>
                </div>
            </Section>
        </>
     );
}
 
export default LabaStud;