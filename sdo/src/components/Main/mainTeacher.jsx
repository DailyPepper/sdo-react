import React from "react";
import styled from 'styled-components'
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px 245px;
`
const MainTeacher = () => {
    return ( 
      <>
        <Section>
          <h1>
            Страница Препода
          </h1>
        </Section>
      </>
    );
}

export default MainTeacher;
