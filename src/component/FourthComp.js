import React from 'react'

const FourthComp = () => {
    const imageUrl = 'https://www.nasa.gov/wp-content/uploads/2024/02/potw2408a.jpg?resize=1868,2000';
    const fileName = 'downloaded-image.jpg';

    const handleDownload = () => {
        fetch(imageUrl)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => console.error('Error downloading image:', error));
    };
    return (
        <div className='flex justify-between mt-16'>
            <div className='mx-28 mt-10 '>
                <h1 className='text-gray-600 text-sm' >T O D A Y</h1>
                <h1 className='font-bold text-5xl'>Image Of The Day</h1>
                <h1 className='font-semibold mt-16'>Hubble Views an Active Star-Forming Galaxy</h1>
                <h1>This NASA/ESA Hubble Space Telescope image features IC 3476, a dwarf galaxy that lies about 54 million light-years from Earth in the constellation Coma Berenices. While this image does not look very dramatic – we might say it looks almost serene – the actual physical events taking place in IC 3476 are highly energetic. In fact, the little galaxy is undergoing a process called ram pressure stripping that is driving unusually high levels of star formation in regions of the galaxy.</h1>
                <div className='flex flex-row mt-4'>
                    <h1 className='font-bold '>Browse Image Archive</h1>
                    <button className='bg-red-600 rounded-full text-white w-6 mx-3'>⭧</button>
                </div>
            </div>

            <img className=' max-h-[557px] mx-32 ' alt='' src='https://www.nasa.gov/wp-content/uploads/2024/02/potw2408a.jpg?resize=1868,2000' />


            <button onClick={handleDownload} className='bg-red-700 w-96 h-10 py-2 md:py-4 hover:opacity-40  text-white rounded-lg my-2 p-4 px-2 md:px-12 text-xl mx-3 '>
                Download Image
            </button>

        </div>
    )
}

export default FourthComp;
