import React from "react";
import Main from "./Main/Main";
import Header from "./Header/Header";
import { useState } from "react";


const Logged = ({setIsLogged}) => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    
    return ( 
        <>
            <Header 
                isLoggedIn = {isLoggedIn} 
                setisLoggedIn = {setIsLoggedIn}
                >
            </Header>
            <Main
                isLoggedIn = {isLoggedIn}
            >
            </Main>
        </>
     );
}
 
export default Logged;