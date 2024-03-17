import styled from "styled-components"

const SectionLab = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    padding: 75px 0px 100px;
`
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
`
const ListSubject = styled.li`
    width: 520px;
    height: 50px;
    background-color: #fff;
    border-radius: 7px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const BigList = styled.li`
    width: ${({ $Block }) => ($Block ? '673px' : '673px')};
    height: ${({ $Block }) => ($Block ? '430px' : '430px')};
    background-color: #E2EDD0;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    justify-content: space-around;
`
const Score = styled.div`
    width: 40px;
    height: 40px;
    background-color: grey;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`
const Text = styled.p`
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 600;  
`
const RowBlocks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 0px 0px 20px;

`
const Button = styled.div`
    width: 100px;
    height: 40px;
    background-color: #C8D5F6;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`
const PersonalStud = () => {

    return (
        <>
            <SectionLab>
                <RowBlocks>
                        <List>
                            <Text>
                                ФИО студента:
                            </Text>
                            <Text>
                                Иванов Иван Иванович
                            </Text>
                        </List>
                        <List>
                            <Text>
                                Номер группы:
                            </Text>
                            <Text>
                                221-111  
                            </Text>
                        </List>
                        <List>
                            <Text>
                                Форма обучения:
                            </Text>
                            <Text>
                                Очная
                            </Text>
                        </List>
                        <List>
                            <Text>
                                Направление обучения:
                            </Text>
                            <Text>
                                Информационная безопасность
                            </Text>
                        </List>
                </RowBlocks>
                <RowBlocks>
                    <BigList>
                        <Text>
                            Дисциплины:
                        </Text>
                        <ListSubject>
                            <Text>
                                Предмет
                            </Text>
                            <Score>
                                <Text>
                                    5/10
                                </Text>
                            </Score>
                            <Button>
                                <Text>
                                    Перейти
                                </Text>
                            </Button>
                        </ListSubject>
                        <ListSubject>
                            <Text>
                                Предмет
                            </Text>
                            <Score>
                                <Text>
                                    5/10
                                </Text>
                            </Score>
                            <Button>
                                <Text>
                                    Перейти
                                </Text>
                            </Button>
                        </ListSubject>
                        <ListSubject>
                            <Text>
                                Предмет
                            </Text>
                            <Score>
                                <Text>
                                    5/10
                                </Text>
                            </Score>
                            <Button>
                                <Text>
                                    Перейти
                                </Text>
                            </Button>
                        </ListSubject>
                        <ListSubject>
                            <Text>
                                Предмет
                            </Text>
                            <Score>
                                <Text>
                                    5/10
                                </Text>
                            </Score>
                            <Button>
                                <Text>
                                    Перейти
                                </Text>
                            </Button>
                        </ListSubject>
                        <ListSubject>
                            <Text>
                                Предмет
                            </Text>
                            <Score>
                                <Text>
                                    5/10
                                </Text>
                            </Score>
                            <Button>
                                <Text>
                                    Перейти
                                </Text>
                            </Button>
                        </ListSubject>
                    </BigList>
                </RowBlocks>
            </SectionLab>
        </>
     );
}
 
export default PersonalStud;