import React from 'react';
import Advantages from "./Advantages";
import Presentation from "./Presentation";
import Payment from "./Payment";



function Main(props) {
    window.scrollTo(0, 0)
    return (
        <div className='mainPage'>
            <Presentation/>
            <div className='mainPage__container'>
                <Advantages />
                <Payment />
            </div>
        </div>
    );
}

export default Main;