import React, { useState } from 'react'

const Header = () => {
    const [show, setShow] = useState(false);

    const showdata = () => {
        setShow(!show);
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-black z-10 flex flex-col md:flex-row justify-center md:justify-between '>
            <div> <button onClick={showdata} className='text-white font-bold text-xl py-5 px-4 border-transparent hover:border-blue-500 transition duration-300'>Explore {show ? ">" : "<"}</button>
                <div className='flex'>{show &&
                    <ul className='text-white my-3 hover:border-r border-transparent hover:border-gray-600 transition duration-300 pr-20' >
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Home</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Missions</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Humans in Space</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Earth & Climate</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>The Solar System</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>The Universe</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Science</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Aeronautics</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Technology</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Learning Resources</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>About Nasa</li>
                        <li className='my-3 hover:border-b border-transparent hover:border-gray-600 transition duration-300'>Español</li>
                    </ul>}
                    <div className='px-10 py-5'>
                        {show &&
                            <h1 className='py-3 text-gray-600'>FEATURED</h1>}
                        <div
                            className='flex'>
                            <div>  {show && <img className='px-4 p-1 w-50 h-96' src='https://www.nasa.gov/wp-content/uploads/2024/02/kbo-coll-lg.jpg' alt='x' />}
                                {show && <h1 className='text-gray-600 px-4 p-1'>4 MIN READ</h1>}
                                {show && <p className='text-white px-4 p-1'> NASA's New Horizons Detects Dusty Hints of Extended Kuiper Belt</p>}
                            </div>
                            <div>{show && <img className='p-1 w-80 h-96' src='https://www.nasa.gov/wp-content/uploads/2024/02/maf-20231114-cs3-lh2breakcelle02.jpg?resize=768,512' alt='x' />}
                                {show && <h1 className='text-gray-600 px-4 p-1'>3 MIN READ</h1>}
                                {show && <p className='text-white px-4 p-1'> Rocket Propellant Tanks for NASA's Artemis III Mission Take Shape</p>}

                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div className='' style={{
                height: 50,
                position: "absolute",
                top: 20,
                left: "17%"
            }}>
                <input type='text' placeholder='search...' className='bg-black border-gray-600 my-5 mx-1' />
            </div>

            <p></p>
            <div><img className='absolute left-[47%] w-20 mx-auto md:mx-0' src='https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg'
                alt='logo' /></div>
            <div className='flex h-50px font-bold text-xl py-5 px-1 text-white'>
                <h1 className=' px-2 min-w-[150px]'>New & Events</h1>
                <h1 className=' px-2'>Multimedia</h1>
                <h1 className=' px-2'>Nasa+</h1>
            </div>

        </div>
    )
}

export default Header
