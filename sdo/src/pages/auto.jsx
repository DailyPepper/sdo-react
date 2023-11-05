import React, { useState } from 'react';
import "../styles/style.css"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const Auto = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [setError] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
    
        if (username === 'admin' && password === 'password') {
          
          setError('');
          setUsername('');
          setPassword('');

        } else {
          setError('Invalid username or password');
        }
    };
    
    return ( 
      <>
        <Header/>
          <div className='section__login'>
                <h1 className="section__login-heading"> 
                    Войдите в личный кабинет
                </h1>
                <form 
                  onSubmit={handleLogin} 
                  className='section__login-form' 
                  method='post'
                  action='#'
                >
                    <input 
                        type="text" 
                        placeholder=" Ваш e-mail* или номер телефона" 
                        onChange={handleUsernameChange}
                        name='username'
                        className='section__login-formInput'
                    />
                    <input 
                        type="password"
                        placeholder=" Password"
                        name='password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='section__login-formInput'
                    />
                    <button type="submit" className='section__login-button'>Войти</button>
                </form>
            </div>
          <Footer/>
      </>
        
     );
}
 
export default Auto;