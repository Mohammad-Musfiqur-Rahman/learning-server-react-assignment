import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const getLocalItmes = () => {
//     let time = localStorage.getItem('time')
//     console.log(time)
//     if(time){
//         return JSON.parse(localStorage.getItem('time'));
//     }
//     else{
//         return ''
//     }
// }

const Sidebar = () => {

    // const [breakTime, SetBreakTime] = useState(getLocalItmes());
    // useEffect( () => {
    //     localStorage.setItem('time', JSON.stringify(breakTime))
    // }, [breakTime])

    // const notify = () => toast('Well done')
   
    // console.log(secondTime)
    // const initialValue = 0;
    // const sumWithInitial = secondTime.reduce(
    // (previousValue, currentValue) => previousValue + currentValue,
    // initialValue
    // );
    // console.log(sumWithInitial);    
    
    return (
        <div>
            <hr />
            <h1>Information</h1>
            <hr />
            
        </div>
    );
};

export default Sidebar;