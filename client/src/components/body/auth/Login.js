import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import Header from '../../header/Header'
import './auth.css'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()

    const {email, password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            setUser({...user, err: '', success: res.data.msg})

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }



    return (
       <div>
        <Header />
        <div className="login_page">
          
            <br />
            <div className="login_cont">
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            <h2>Login</h2>
            <form className= "login_form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <button type="submit">Login</button>
                    
                </div>
                <br />
                <Link to="/forgot_password">Forgot your password?</Link>
            </form>

            <div className="hr">Or</div>

            <div className="social">
                <GoogleLogin
                    clientId="922773639039-lgv14kjaeo6s96bid8veq8utp8lc8hub.apps.googleusercontent.com"
                    buttonText="Login with google"
                    onSuccess={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                
            

            </div>

            <p>New User? <Link to="/register">Register</Link></p>
        </div>
        </div>
        </div>
    )
}

export default Login
