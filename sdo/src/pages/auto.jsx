import React from "react";


const auto = () => {

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
        <div>
            <h1 className="login__heading"> 
                Войдите в личный кабинет или создайте профиль
            </h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Ваш e-mail* или номер телефона" />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </form>
        </div>
     );
}
 
export default auto;