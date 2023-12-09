import React from 'react';
import Image from 'next/image';
import dcyankitchen from './assets/dcyankitchen.jpeg'; // Replace with the actual path to your kitchen image file
import marbleImage from './assets/marbel.jpeg'; // Replace with the actual path to your marble image file

const MyImage = () => {
  return (
    <div className="flex flex-col items-center text-center min-h-screen relative">
      {/* Marble image on the left side */}
      <div className="absolute left-0 top-0 h-full">
        <Image
          src={marbleImage}
          alt="Marble Image"
          width={235} // Adjust the width as needed
          height={800} // Adjust the height to match the kitchen image height
          quality={100}
          objectFit="cover" // Add this line
        />
      </div>

      {/* Kitchen image */}
      <div style={{ width: '1000px' /* Adjust this width to match the image width */ }}>
        <Image
          src={dcyankitchen}
          alt="Big Image"
          width={1000}
          height={800}
          quality={100}
          objectFit="cover" // Add this line
        />
      </div>

      {/* Marble image on the right side */}
      <div className="absolute right-0 top-0 h-full">
        <Image
          src={marbleImage}
          alt="Marble Image"
          width={235} // Adjust the width as needed
          height={800} // Adjust the height to match the kitchen image height
          quality={100}
          objectFit="cover" // Add this line
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
