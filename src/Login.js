import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function Login() {

    const [{}, dispatch] = useStateValue()

    useEffect(() => {
        // will only run once when the app component loads...
        auth.onAuthStateChanged(authUser => {
            console.log('THE USER IS >>> ', authUser)
            if(authUser){
                // the user just logged in / the user was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/', {replace: true})
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                // it successfully created a new user with email and password
                console.log(auth)
                if(auth){
                    navigate('/', {replace: true})
                }
            })
            .catch(error=>alert(error.message))
        // do some fancy firebase register
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>    
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to AMAZON FAKE CLONE Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
        </div>       
    </div>
  )
}

export default Login