import React from 'react'
import Header from './Header';
import MainComponent from './MainComponent';
import SecondaryComp from './SecondaryComp';
import Thirdcomp from './Thirdcomp';
import FourthComp from './FourthComp';

const Home = () => {
    return (
        <div>
            <Header />
            <MainComponent />
            <SecondaryComp />
            <Thirdcomp />
            <FourthComp />

        </div>
    )
}

export default Home;
