import React from 'react';
import { AuthContext } from './index';

function Login() {

  const { isLoggedIn, logout, login } = React.useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div id="app-login">
      {isLoggedIn
        ? <><p>Hello {username}, <button onClick={logout}>Logout</button></p></>
        : <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Login</button>
          </form>
      }
    </div>
  )
}

export default Login;
