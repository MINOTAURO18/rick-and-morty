import React, { useState } from "react";
import validation from "../../validation";


const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) => {
        setUserData({
          ...userData,
          [event.target.name] : event.target.value
        })


        setErrors(validation ({
          ...userData,
          [event.target.name] : event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }

    return (
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={userData.email} 
            onChange={handleChange}
            type="text" 
            name="email" />
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input value={userData.password}
            onChange={handleChange} 
            type="password" 
            name="password" />
            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}

            <button>Login</button>
         </form>
    );
}

export default Form;