import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUsername } from '../Auto/Slice/authSlice';
const SectionLab = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 75px 0px 100px;
`;

const List = styled.li`
    width: 320px;
    height: 100px;
    background-color: #D5DEF6;
    border-radius: 7px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BigList = styled.li`
    width: ${({ $Block }) => ($Block ? '673px' : '673px')};
    height: ${({ $Block }) => ($Block ? '68px' : '68px')};
    background-color: #E2EDD0;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    justify-content: space-around;
`;

const Text = styled.p`
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 600;
`;

const RowBlocks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0px 0px 20px;
`;

const Button = styled.div`
    width: 125px;
    height: 50px;
    background-color: #C8D5F6;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    .button__link{
        color: white;
        text-decoration: none;
        display: flex;
        justify-content: space-around;
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 600;
    }
`;

const PersonalTeacher = () => {
    const username = useSelector(state => state.auth.username);

    return (
        <SectionLab>
            <RowBlocks>
                <List>
                    <Text>
                        ФИО преподавателя:
                    </Text>
                    <Text>
                        {username}
                    </Text>
                </List>
                <List>
                    <Text>
                        Преподаваемая дисциплина:
                    </Text>
                    <Text>
                        Информационные Технологии  
                    </Text>
                </List>
                <List>
                    <Text>
                        Группы:
                    </Text>
                    <Text>
                        218-221, 218-222, 221-734, 221-735
                    </Text>
                </List>
            </RowBlocks>
            <RowBlocks>
                <BigList>
                    <Text>
                        Список лабораторных работ
                    </Text>
                    <Button>
                        <Link to="/StudLaboratory" className="button__link">
                            Перейти 
                        </Link>
                    </Button>
                </BigList>
                <BigList>
                    <Text>
                        Список лабораторных работ
                    </Text>
                    <Button>
                        <Link to="/StudLaboratory" className="button__link">
                            Перейти 
                        </Link>
                    </Button>
                </BigList>
            </RowBlocks>
        </SectionLab>
    );
};

export default PersonalTeacher;
