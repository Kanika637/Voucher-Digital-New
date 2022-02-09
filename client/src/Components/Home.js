import React from 'react'
import '../styles/home.css'
import img from "./images/voucher_img.png"
const Home=()=>{
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
            // onSubmit={this.onSubmitHandler.bind(this)}
            // method="post"
            className="sign_container"
          >
            <input
            //   onChange={this.firstNameInputChangeHandler}
              name="email"
              className="enter_sign"
              type="email"
              placeholder="Email Address*"
            ></input>
            <input
            //   onChange={this.lastNameInputChangeHandler}
              name="password"
              className="enter_pass"
              type="password"
              placeholder="Password*"
             
            ></input>
            

            
            <button type="submit" name="submit" className="button_sign">
              Login
            </button>
            
           </form>
           <div className='lower'>

            <p className='rem'>Remember Password</p>
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

