import React from 'react';
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div id='loginBg'>
            <div className='loginCard'>
                <img id='loginLogo'src={Logo} alt='Logo' />
                <button className='loginBtns' id='loginBtn'>
                    <Link to='home' className='link'>
                    LOG IN
                    </Link>
                </button>
                <button className='loginBtns' id='registerBtn'>
                    <Link to='register' className='link'>
                    REGISTER
                    </Link>
                </button>
            </div>

        </div>
    );
}

export default Login;