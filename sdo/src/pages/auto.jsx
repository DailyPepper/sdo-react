import React, { useState } from 'react';
import "../styles/style.css"
const Auto = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();

    
        // Perform authentication logic here
        // You can make API calls or validate credentials locally
    
        if (username === 'admin' && password === 'password') {
          // Successful authentication
          setError('');
          setUsername('');
          setPassword('');
          // Redirect to the main app or dashboard
        } else {
          // Failed authentication
          setError('Invalid username or password');
        }
    };
    
    return ( 
        <div className='section__login'>
            <h1 className="section__login-heading"> 
                Войдите в личный кабинет
            </h1>
            <form onSubmit={handleLogin} className='section__login-form' method='post'>
                <input 
                    type="text" 
                    placeholder=" Ваш e-mail* или номер телефона" 
                    onChange={handleUsernameChange}
                    className='section__login-formInput'
                />
                <input 
                    type="password"
                    placeholder=" Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className='section__login-formInput'
                />
                <button type="submit" className='section__login-button'>Войти</button>
            </form>
        </div>
     );
}
 
export default Auto;
