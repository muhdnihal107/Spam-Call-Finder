import React, { useContext, useState } from 'react'
import { dataContext } from '../context/Context';

const Login = () => {
  const [login,setLogin] = useState({
    email: '',
    password: '',
  });
  const {logUser} = useContext(dataContext);

  const handleChange = (e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    logUser(login);
    console.log(login);
    
    
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder='Email'
            name='email'
            value={login.name}
            onChange={handleChange} />

            <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder='Password'
            name='password'
            value={login.password}
            onChange={handleChange}

          />
       <div>
        <button type='submit'>Submit</button>
       </div>
        </form>

      </div>
    </div>
  )
}

export default Login