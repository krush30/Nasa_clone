import React from 'react'

const FifthComp = () => {
    return (
        <div>
            <div className='flex flex-col w-screen aspect-video  absolute pt-[20%] px-6 md:px-24  text-white bg-gradient-to-r from-black  '>
                <h1 className='md:text-6xl font-bold text-2xl '>Our Changing Planet</h1>
                <p className='py-3 text-lg w-1/2 hidden md:inline-block'>For more than 50 years, NASA satellites have provided data on Earth's land, water, air, temperature, and climate. NASA's Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.

                </p>
                <div className='flex flex-row'>
                    <h1>Start Exploring</h1>
                    <button className='px-2 rounded-full bg-red-600 text-white'>⭧</button>
                </div>
            </div>
            <img src='https://www.nasa.gov/wp-content/uploads/2024/02/iss067e016350-lrg.jpg?resize=2000,1333' alt='' />
        </div>
    )
}

export default FifthComp;

