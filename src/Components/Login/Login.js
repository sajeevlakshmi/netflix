import React,{useState} from "react";
import { useHistory } from "react-router-dom";

import SignUp from "../SignUp/SignUp";
import "./Login.css";
const Login = () => {
  const history =useHistory()
    const [signIn,setSignIn] =useState(false)
    const [email,setEmail]=useState("")
  return (
  
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix-Logo"
        />
        {signIn?(null):(
           <button onClick={()=>setSignIn(true)} className="loginScreen-button">Sign In</button>
        )}
       
      </div>
      <div className="loginScreen-gradient"></div>
    
      <div className="loginScreen-body">
          {signIn?(
              <SignUp eAddress={email}/>
          ):(
            <>
            <h1 className="card-title">Unlimited movies, TV<br></br> shows and more.</h1>
            <h2 className="card-subtitle">Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="loginScreen-input">
            <form>
                <input type="text" placeholder="Email Address" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={()=>setSignIn(true)}
                className="loginScreen-getStarted ">Get Started </button>
            </form>
        </div>
            </>

          )}
         
      </div>
     
    </div>
   
    
  );
};

export default Login;
