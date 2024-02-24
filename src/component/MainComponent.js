import React, { useEffect } from 'react'
import { json } from 'react-router-dom';
import MainData from './MainData';
import MainImg from './MainImg';

const MainComponent = () => {

    return (
        <div>
            <MainData />
            <MainImg />
        </div>
    )
}

export default MainComponent;
