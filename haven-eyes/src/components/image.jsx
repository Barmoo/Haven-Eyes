import React from 'react';

const Image = () => {
  return (
    <div>
      <div className="mt-6 flex gap-8">
        <img src="/image/image1.png" alt="Image 1" className="w-32 h-32 object-contain" />
        <img src="/image/image2.png" alt="Image 2" className="w-32 h-32 object-contain" />
      </div>
    </div>
  );
};

export default Image;