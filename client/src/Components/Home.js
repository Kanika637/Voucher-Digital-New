import React, { useState } from 'react'
import '../styles/home.css'
import img from "./images/voucher_img.png"
import axios from "axios"
const Home=()=>{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const login=(e)=>{
        e.preventDefault();
        

        if (
            !(
              email === "" ||
              password===""
            )
          ) 

       { axios
        .post('https://reqres.in/api/login',{
            email:email,
            password:password,
        })
        .then((res)=>{
            console.log(res);
            console.log("Login Successfull")
                alert("Login Successfull");

            
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    else if(email===""){
        console.log("Email missing")
        alert("Missing Email")
      
    }
    else if(password===""){
        console.log("Password missing")
        alert("Missing Password")
     
    }
    else{
        alert("Please enter valid details")
    }

    }
    return(
        <div className='home'>
            <div className='buttons'>
              
          <button className='blue'>Start Free Trial</button>
          <button className='orange'>Login</button>
      </div>
       <div className='flex'>
           <div className='head'>
       <p className='logo'>ATools</p>
       <p className='dot'>.</p>
       </div>
           
        <div className="login">
        <div className="Sign_In">Welcome Back</div>
        <div className="sign_">
          <form
            method="post"
            className="sign_container"
          >
            <input
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              className="enter_sign"
              type="email"
              placeholder="Email Address*"
            ></input>
            <input
               
               onChange={(e)=>setPassword(e.target.value)}
              name="password"
              className="enter_pass"
              type="password"
              placeholder="Password*"
             
            ></input>
            

            
            <button onClick={login} type="submit" name="submit" className="button_sign">
              Login
            </button>
            
           </form>
           <div className='lower'>

            <input checked="checked" className='check' type="checkbox" ></input>
            <p className='rem' >Remember Password</p>
            <p className='Forgot'>Forgot Password?</p>
            </div>
        </div>
      </div>

      

      <div className='pretty'>
               <img className='image' src={img} alt='/'></img>
           </div>
          
      </div>
      </div>
    )
}

export default Home

