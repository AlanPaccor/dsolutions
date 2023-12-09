import React from 'react';
import floorTile from './assets/floorTile.jpeg';

const ShortGallery = () => {
  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <img src={floorTile} alt="floorTile" className="w-full h-auto" />
        <h2 className="text-lg font-semibold mt-2">Title 1</h2>
        <p className="mt-1">Description 1</p>
        <a href="link1" className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded">Button 1</a>
      </div>

      <div className="w-1/3">
        <img src="image2.jpg" alt="Image 2" className="w-full h-auto" />
        <h2 className="text-lg font-semibold mt-2">Title 2</h2>
        <p className="mt-1">Description 2</p>
        <a href="link2" className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded">Button 2</a>
      </div>

      <div className="w-1/3">
        <img src="image3.jpg" alt="Image 3" className="w-full h-auto" />
        <h2 className="text-lg font-semibold mt-2">Title 3</h2>
        <p className="mt-1">Description 3</p>
        <a href="link3" className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded">Button 3</a>
      </div>
    </div>
  );
};

export default ShortGallery;
