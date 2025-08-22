import React from 'react'
import Style from './LandingScreen.module.css'
import { useNavigate } from 'react-router-dom'


const LandingScreen = () => {
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    }
    const toSignup = () => {
        navigate('/signup');
    }
    return (
        <div className={Style.landingScreen}>
            <div className={Style.landingScreen_welcome}>
                Welcome to PopX
            </div>
            <div className={Style.landingScreen_para}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
            <div className={Style.landingScreen_createAccount} onClick={toSignup}>
                <span className={Style.landingScreen_createAccount_text}>Create Account</span>
            </div>
            <div className={Style.landingScreen_login} onClick={toLogin}>
                <span className={Style.landingScreen_login_text}>Already Registered? Login</span>
            </div>
        </div>
    )
}

export default LandingScreen