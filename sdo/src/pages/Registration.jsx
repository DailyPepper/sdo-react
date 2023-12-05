import React from "react";
import { useState } from 'react';
import "../styles/style.css"
import Header from "../components/Header/Header";





const registration = () => {
    return ( 
        <>
        <Header/>
        <div className='section__login'>
                <h1 className="section__login-heading"> 
                    Регистрация
                </h1>
                <form 
                  className='section__login-form' 
                  method='post'
                  action='#'
                >
                    <input 
                        type="text" 
                        placeholder=" Login" 
                        name='somelogin'
                        className='section__login-formInput'
                    />
                    <input 
                        type="password"
                        placeholder=" Password"
                        name='somepassword'

                        className='section__login-formInput'
                    />
                    <input 
                        type="text"
                        placeholder=" Number group"
                        name=''

                        className='section__login-formInput'
                    />
                    <button type="submit" className='section__login-button'>Зарегистрироваться</button>
                </form>
            </div>
        </>
     );
}
 
export default registration;