import React from 'react';

const CaroselItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
  <div className='overlay'></div>
   <img src={image} alt='banner.jpg' className="w-full" />
    
   
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-28 top-1/2">
      <h1 className='lg:text-6xl md:text-4xl sm:text-xl font-bold text-gray-200 '>Home Made <br/>Food Delivery</h1>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default CaroselItem;