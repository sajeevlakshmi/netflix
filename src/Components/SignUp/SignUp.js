import React, { useRef,useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/Config';
import NewUser from '../NewUser/NewUser';
import './SignUp.css'

function SignUp(props) {
    const [newUser,setNewuser] =useState(false)
     const history=useHistory()
    const emailRef =useRef(null);
    const passwordRef =useRef(null);
       
    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword
        (emailRef.current.value,passwordRef.current.value
            ).then((authUser)=>{
                console.log(authUser)
                history.push('/home')
        }).catch((error)=>{
            alert(error.message);
        })
    }
    return (
       
        <div  className={ newUser?"":"signUp-screen"}>
            {newUser?(
                <NewUser eAddress={props.eAddress}/>
            ):(
                <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" value={props.eAddress}/>
            <input ref={passwordRef} type="password" placeholder="Password"/>
            <button onClick={signIn}>Sign In</button>
            <h5>
                <span className="signUpScreen-grey">New to Netflix?  </span>
                 <span className="signUpScreen-link" onClick={()=>setNewuser(true)}>Sign up now</span>
                 </h5>
            </form>

            )}
            
           
        </div>
    )
}

export default SignUp
