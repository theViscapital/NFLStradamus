import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Outlet} from 'react-router-dom';

const Register = () => {
    return (
        <div className="RegisterBg">
            <RegisterForm/>
            <Outlet/>
        </div>
    );
}

export default Register;