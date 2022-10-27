import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'
import Questions from '../Qustions/Qustions'

const Home = () => {
    return (
        <div>
           <Header></Header>
            <Outlet></Outlet>
            <Questions></Questions>
            
        </div>
    )
};

export default Home;