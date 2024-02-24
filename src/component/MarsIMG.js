import React, { useEffect, useState } from 'react';
import Header from './Header';

// ... (import statements)

const MarsIMG = ({ img }) => {
    const [marsimg, setMarsIMG] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=15&api_key=jesuaDm1PzFzM9a0vApdOxab1r7QA3STqd03ZPKM");
            const json = await data.json();
            console.log(json.photos);
            setMarsIMG(json.photos);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error state if needed
        }
    };

    console.log(img);

    return (
        (marsimg && (
            <div className="flex">
                <Header />
                <div>
                    <div>
                        <h1 className='text-black my-36 mx-10 text-5xl font-bold'>Mars Rover photos</h1>
                    </div>
                    <div className='flex flex-wrap border border-gray-300 '>
                        {marsimg.map((item, index) => (
                            <div key={index} className='w-96 h-72 border border-black py-10 p-10 m-10 '>
                                <div>
                                    <img className=' p-1 hover:rounded-lg border border-gray-300  hover:border-blue-500' src={item.img_src} alt='' />
                                    <div>
                                        <h1 className='font-semibold'>{item.camera.full_name} </h1>
                                        <h1 className='font-semibold'>{item.earth_date}</h1>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))
    );
};

export default MarsIMG;
