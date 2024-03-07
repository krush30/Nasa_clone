import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useNavigate } from 'react-router-dom';
import TechTransfer from './TechTransfer';

const SixComp = () => {
    const navigate = useNavigate();
    const [techtransfer, setTechTransfer] = useState();
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const data = await fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=jesuaDm1PzFzM9a0vApdOxab1r7QA3STqd03ZPKM')
            const json = await data.json();

            setTechTransfer(json.results)
        } catch (error) {
            console.error('Error fetching data:', error)
        }


    }
    if (!techtransfer) return <Shimmer />;

    console.log(techtransfer);
    const data = techtransfer[8];

    console.log(data);
    const image = data[10];
    console.log(image);

    const handleClicked = () => {
        navigate("/techtransfer")

    }






    return (
        <div>
            <div>
                <img className='h-96 mx-10 mt-10  hover:transform hover:scale-110 transition-transform' src={image} alt='techTransfer' />
                <div className='flex flex-row'>
                    <h1 className='font-semibold ml-10 mt-3'>Nasa's Tech Transfer data</h1>
                    <button className='font-semibold mt-1 ml-1 bg-red-600 text-white rounded-lg' onClick={handleClicked}>Show</button>
                </div>
            </div>
            {techtransfer.map((item) => <TechTransfer imgdata={item} />)
            }



        </div>)

}

export default SixComp;
