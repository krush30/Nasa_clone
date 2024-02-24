import React from 'react'

const MainData = () => {
    return (
        <div className='flex flex-col w-screen aspect-video  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black  '>
            <h1 className='md:text-6xl font-bold text-2xl '>NASA Science Lands on the Moon</h1>
            <p className='py-3 text-lg w-1/2 hidden md:inline-block'>Carrying six NASA science research and technology demonstrations, Intuitive Machines' lunar lander successfully landed on the Moon at 6:23 p.m. EST on Thursday. This mission is the first U.S. soft landing on the Moon in more than 50 years.</p>
            <button className='bg-red-700 w-96 h-10 py-2 md:py-4 hover:opacity-40  text-white rounded-lg my-2 p-4 px-2 md:px-12 text-xl mx-3 '>CLPS and Intuitive Machines </button>
        </div>
    )
}

export default MainData;
