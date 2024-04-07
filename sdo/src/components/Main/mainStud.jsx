import React from "react";
import styled from 'styled-components'
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px 245px;
`
const MainStud = () => {
    return ( 
      <>
        <Section>
          <h1>
            Страница Студентов
          </h1>
        </Section>
      </>
    );
}

export default MainStud;
