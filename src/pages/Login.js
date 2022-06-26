import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div id='loginBg'>
            <div className='loginCard'>
                <h1>NFLSTRADAMUS</h1>
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