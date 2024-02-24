import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addIMGData } from '../utils/marsSlice';

const useMarsImgData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=15&api_key=jesuaDm1PzFzM9a0vApdOxab1r7QA3STqd03ZPKM");
        const json = await data.json();
        console.log(json.photos);
        dispatch(addIMGData(json.photos.img_src))

    }

}

export default useMarsImgData
