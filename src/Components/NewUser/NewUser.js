import React,{ useRef, useState }  from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase/Config';
import '../SignUp/SignUp.css'

function NewUser(props) {
   
    const history=useHistory()
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef =useRef(null);
    const confirmPasswordRef =useRef(null);

    const register=(e)=>{
        e.preventDefault()
        if (passwordRef.current.value==confirmPasswordRef.current.value){
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
        else
        {
            alert("password mismatch")
        }
        

       
        }
    return (
        <div className="signUp-screen">
        <form>
        <h1>Sign In</h1>
        <input ref={nameRef} type="text" placeholder="Name"/>
        <input ref={emailRef} type="email" placeholder="Email" value={props.eAddress}/>
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <input ref={confirmPasswordRef} type="password" placeholder="Confirm Password"/>
        <button onClick={register}>Register</button>
      
        </form>
       
    </div>
    )
}

export default NewUser
