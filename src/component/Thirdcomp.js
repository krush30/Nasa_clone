import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MarsIMG from './MarsIMG';

const Thirdcomp = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/mars")
    }
    // const [marsimg, setMarsIMG] = useState();
    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const fetchData = async () => {
    //     const data = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=15&api_key=");
    //     const json = await data.json();
    //     console.log(json.photos);
    //     setMarsIMG(json.photos);
    // }




    return (
        <div className='mt-20 px-28'>
            <div className='flex'>
                <div>
                    <h1 className='text-6xl font-bold'>Featured News</h1>
                    <div className='flex'>   <img alt='' className='h-96 mt-10  hover:transform hover:scale-110 transition-transform' src='https://helios-i.mashable.com/imagery/articles/030CT4yzqwUoq4lnxIqlaaD/hero-image.fill.size_1248x702.v1696557026.jpg' />
                        <img className='h-96 mx-10 mt-10  hover:transform hover:scale-110 transition-transform' src='https://i.ytimg.com/vi/OGdwsJHZ-Fo/maxresdefault.jpg' alt='saf' />
                    </div>
                    <div className='flex mt-5 justify-between'>
                        <div className='flex flex-row'>
                            <h1 className='text-xl px-2 font-semibold'>Mars Rover Photos</h1>
                            <button onClick={handleButtonClick} className='bg-red-600 rounded-lg text-white w-16'>Show⭧</button>
                        </div>
                        <div className='font-semibold mt-4'>
                            <p>I ran out of content here so here Cheems </p>
                        </div>
                    </div>
                </div>


            </div>

            {/* <MarsIMG img={marsimg[0].img_src} /> */}
        </div>
    )
}

export default Thirdcomp;
