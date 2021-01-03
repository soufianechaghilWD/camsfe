import React, { useState } from 'react'
import '../Style/Signin.css'
import { auth } from '../firebase'

function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignin = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((user) => console.log(user.user))
    } 

    return (
        <div className="signin">
            <div className="signin__body">
                <h1>CHAT-APP-MERN</h1>
                <form>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={handleSignin} >Sign In</button>
                    <p>If you don't have an account : <span>Sign-Up</span></p>
                </form>
            </div>
        </div>
    )
}

export default Signin
