import React, { useEffect } from 'react'

const SecondaryComp = () => {

    return (
        <div className='flex mt-0 md:-mt-16 px-2 md:pl-12 relative z-20'>
            <div className=' flex flex-col px-20 border-t-2 border-gray-400'>
                <h1 className='px-2 text-gray-600'>IM - 1 MISSION</h1>
                <div className='flex'>
                    <p className='px-2 text-white'>NASA Playloads</p>
                    <button className='px-2 rounded-full bg-red-600 text-white'>⭧</button>
                </div>
            </div>
            <div className=' flex flex-col px-20 border-t-2 border-gray-400'>
                <h1 className='px-2 text-gray-600'>MISSION UPDATES</h1>
                <div className='flex'>
                    <p className='px-2 text-white'>NASA Blog</p>
                    <button className='px-2 rounded-full bg-red-600 text-white'>⭧</button>
                </div>
            </div>
            <div className=' flex flex-col px-20 border-t-2 border-gray-400'>
                <h1 className='px-2 text-gray-600'>A LUNAR ECONOMY</h1>
                <div className='flex'>
                    <p className='px-2 text-white'>Commercial Lunar Payload Services</p>
                    <button className='px-2 rounded-full bg-red-600 text-white'>⭧</button>
                </div>
            </div>
        </div>
    )
}

export default SecondaryComp;
