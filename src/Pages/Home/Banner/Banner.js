import React from 'react';
import banner1 from '../../../assets/Banner/Food-Banner-1.jpg';
import banner2 from '../../../assets/Banner/pizzafinal.webp';
import banner3 from '../../../assets/Banner/seekh-kabab.jpg';
import banner4 from '../../../assets/Banner/fried-fish-banner.jpg';
import './Banner.css';
import CaroselItem from './CaroselItem';

const bannerData = [
  {
    image: banner1,
    prev: 1,
    id: 1,
    next: 2,
  },
  {
    image: banner2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: banner3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: banner4,
    prev: 4,
    id: 4,
    next: 1,
  }
  
]

const Banner = () => {
    return (
        <div className="carousel w-full rounded-lg my-3.5 lg:h-96 md:h-96 sm:h-32">
          {
            bannerData.map(slide => <CaroselItem key={slide.id} slide={slide}></CaroselItem>)
          }
          </div>
    );
};

export default Banner;