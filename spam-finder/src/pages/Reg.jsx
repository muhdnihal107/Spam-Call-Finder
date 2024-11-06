import React, { useContext, useState } from 'react'
import { dataContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


const Reg = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
    });
    const {register} = useContext(dataContext);
    const navigate = useNavigate();

    // const [errors,setErrors] = useState({
    //     errname: false,
    //     erremail: false,
    //     errpassword: false,
    //     errcpassword: false
    // });

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInputs({...inputs,[name]:value})
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        register(inputs);
       console.log(inputs);
      navigate('/login')
       
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    id='name'
                    value={inputs.name}
                    onChange={handleChange}
                    
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    id='email'
                    value={inputs.email}
                    onChange={handleChange}
                     />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    id='password'
                    value={inputs.password}
                    onChange={handleChange}
                    />

                <label htmlFor="cpassword">Confirm Password</label>
                <input
                    type="password"
                    placeholder='Confirm Password'
                    id='cpassword'
                    name='cpassword'
                    value={inputs.cpassword}
                    onChange={handleChange}
                     />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Reg