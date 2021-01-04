import React, { useState } from 'react'
import '../Style/Signup.css'
import Img from '../files/p1.png'
import { auth } from '../firebase'
import { useHistory }from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import axios from '../axios'

function Signup() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const [{ user }, dispatch] = useStateValue();

    const handleSignup = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            if(user){
                dispatch({
                    type: "SET__USER",
                    user: user.user
                });


                axios.post('/addUser', {
                    _id: user.user.uid,
                    email: email,
                    fullName: fullname,
                    userName: username
                })

            }
        })
        .then(() => history.push('/home'))
    }

    return (
        <div className="signup">
            <div className="signup__body">
                <h1>CHAT-APP-MERN</h1>
                <div className="signup__content">
                    <div className="signup__left">
                        <img src={Img} alt="" />
                    </div>
                    <div className="signup__right">
                        <form>
                            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="User name" value={username} onChange={e => setUsername(e.target.value)} />
                            <input type="text" placeholder="Full name" value={fullname} onChange={e => setFullname(e.target.value)} />
                            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <button type="submit" onClick={handleSignup}>Sign Up</button>
                            <p>If you already have an account : <span onClick={() => history.push('/signin')}>Sign-In</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
