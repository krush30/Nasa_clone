import React, { useRef, useState } from 'react'
import validate from './utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const [isitSignin, setIsItSign] = useState(true);

    const handleSignin = () => {
        setIsItSign(!isitSignin);
    }

    const SubmitClicked = () => {
        const message = validate(email.current.value, password.current.value)
        console.log(message);
        setErrorMessage(message);

        if (message) return "There is an error";


        if (!isitSignin) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    navigate("/home")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {



            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigate("/home")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }



    }
    return (
        <div>
            <div className='absolute'>
                <img className='w-screen h-screen' alt='bg' src='https://www.nasa.gov/wp-content/uploads/2023/03/693952main_pia15817-full_full.jpg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='rounded-lg  w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 >{isitSignin ? "Sign in" : "Sign up"}</h1>

                {!isitSignin && <input
                    className='my-2 p-4 w-full bg-black bg-opacity-80'
                    type='text'
                    placeholder='_name'
                />}
                <input
                    ref={email}
                    className='my-2 p-4 w-full bg-black bg-opacity-80'
                    type='text'
                    placeholder='email' />
                <input
                    ref={password}
                    className='my-2 p-4 w-full bg-black bg-opacity-80'
                    type='password'
                    placeholder='password' />
                <p>{errorMessage}</p>
                <button className='p-4 my-7 text-white bg-red-600 rounded-lg w-full'
                    onClick={SubmitClicked}>Submit</button>
                <button onClick={handleSignin}>{isitSignin ? "don't have an account, Sign up" : "already have an account, Sign in"} </button>
            </form>
        </div>
    )
}

export default Login
