import React from 'react';
import Image from 'next/image';
import dcyankitchen from './assets/dcyankitchen.jpeg'; // Replace with the actual path to your kitchen image file
import marbleImage from './assets/marbel.jpeg'; // Replace with the actual path to your marble image file

const MyImage = () => {
  return (
    <div className="flex flex-col items-center text-center min-h-screen relative">
      {/* Marble image on the left side */}


      {/* Kitchen image */}
      <div style={{ width: '1000px' /* Adjust this width to match the image width */ }}>
        <Image
          src={dcyankitchen}
          alt="Big Image"
          
          objectFit="cover" // Add this line
          className='
          w-1/3 hover:transform hover:shadow-lg hover:scale-105 transition-transform duration-500
          w-full h-full object-cover rounded-xl shadow-xl'
        />
      </div>


      <div className="mt-4 text-xl font-bold relative z-10">
        <h2>
          <span className='border-b border-thick text-white'> Make Your Kitchen Personal</span>
        </h2>
      </div>
    </div>
  );
}

export default MyImage;
