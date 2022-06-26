import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Outlet} from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <RegisterForm/>
            <Outlet/>
        </div>
    );
}

export default Register;