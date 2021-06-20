import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/Config';
import './SignUp.css'

function SignUp() {
     const history=useHistory()
    const emailRef =useRef(null);
    const passwordRef =useRef(null);
    const register=(e)=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{
     console.log(authUser)
     history.push('/home')
    }).catch((error)=>{
        alert(error.message);
    })
    }
    
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
        <div className="signUp-screen">
            <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email"/>
            <input ref={passwordRef} type="password" placeholder="Password"/>
            <button onClick={signIn}>Sign In</button>
            <h5>
                <span className="signUpScreen-grey">New to Netflix?  </span>
                 <span className="signUpScreen-link" onClick={register}>Sign up now</span>
                 </h5>
            </form>
           
        </div>
    )
}

export default SignUp
