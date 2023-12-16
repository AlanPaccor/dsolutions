import React from 'react';
import floorTile from './assets/floorTile.jpeg';
import kitchenReno from './assets/kitchenReno.jpeg';
import livingRoomReno from './assets/livingRoomReno.jpeg';

interface ShortGalleryProps {}

const ShortGallery: React.FC<ShortGalleryProps> = () => {
  return (
    <div className="flex space-x-4 mx-20">
      <div className="w-1/3 hover:transform hover:shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          src={floorTile.src}
          alt="floorTile"
          className="w-full h-full object-cover rounded-xl shadow-xl"
        />
        <h2 className="text-lg font-semibold mt-2 text-white">Title 1</h2>
        <p className="mt-1 text-white">Description 1</p>
        <a href="/" className='shadow-xl inline-block text-center border text-white hover:text-gray-800 hover:bg-gray-300 rounded-md px-2 py-2 mt-1'>
          Button 1
        </a>
      </div>

      <div className="w-1/3 hover:transform hover:shadow-lg hover:scale-105 transition-transform duration-500">
        <img src={kitchenReno.src} alt="Image 2" className="w-full h-full object-cover rounded-xl shadow-xl"/>
        <h2 className="text-lg font-semibold mt-2 text-white">Title 2</h2>
        <p className="mt-1 text-white">Description 2</p>
        <a href="/" className='shadow-xl inline-block text-center border text-white hover:text-gray-800 hover:bg-gray-300 rounded-md px-2 py-2 mt-1'>
          Button 2
        </a>
      </div>

      <div className="w-1/3 hover:transform hover:shadow-lg hover:scale-105 transition-transform duration-500">
        <img src={livingRoomReno.src} alt="Image 3" className="w-full h-full object-cover rounded-xl shadow-xl" />
        <h2 className="text-lg font-semibold mt-2 text-white">Title 3</h2>
        <p className="mt-1 text-white">Description 3</p>
        <a href="/" className='shadow-xl inline-block text-center border text-white hover:text-gray-800 hover:bg-gray-300 rounded-md px-2 py-2 mt-1'>
          Button 3
        </a>
      </div>
    </div>
  );
};

export default ShortGallery;
