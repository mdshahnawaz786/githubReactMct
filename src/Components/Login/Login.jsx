import React, { useState } from 'react'
import image from './WhatsApp Image 2023-05-02 at 21.23.39.jpg'
import './login.css'

const Login = ({setloggedin}) => {
    const [state, setstate]= useState({
        username:"",
        password:""
    })
  return (
    <div className='LoginPage'>
        <div className="loginContainerDiv">
            <div className="imgDivCont">
                <img src={image} alt="" />
            </div>
            <div className="inpuDivCont">
               
                <h1>Login</h1><br />
                <label > Username:</label>
                <input type="text"  placeholder='admin' onChange={((e)=>{
                    setstate({...state,username:e.target.value})
                })}/>
                <br />
                <label > Password:</label>
                <input type="password" placeholder='admin@123' onChange={((e)=>{
                    setstate({...state,password:e.target.value})
                })}/>
                <br /><br />
                <button onClick={() => {
            if (
              (state.username === "Shahnawaz" &&
                state.password === "Shahnawaz@123") ||
              (state.username === "admin" && state.password === "admin@123")
            ) {
              setloggedin(true);
            } else {
              alert("Enter proper credentials");
            }
          }}>Login</button>

                    <div className="Footerdiv" >
                        <p>Forget</p>
                        <p>Help</p>
                    </div>
                
            </div>
            
                
           
        </div>
    </div>
  )
}

export default Login