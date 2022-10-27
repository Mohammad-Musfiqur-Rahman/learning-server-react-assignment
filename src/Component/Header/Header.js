import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar/Navbar';

const Header = () => {
    return (
        <div>
            <div className='bg-warning d-flex p-3'>
                <div>
                    <img src="./logo.png" alt="" style={{ height: "100px" }} />
                </div>
                <div>
                    <h1 className='fw-bold'>GYM WorkOut Course</h1>
                </div>
            </div>

            <div className='nav justify-content-center'>
                <Navbar></Navbar>
            </div>

        </div>
    );
};

export default Header;