import React from 'react';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Home;