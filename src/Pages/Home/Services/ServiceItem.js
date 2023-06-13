import React, { useEffect } from 'react';
import { HiStar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Loading from '../../Loading/Loading';

import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';


const ServiceItem = ({allservice}) => {
    const {_id, serviceTitle, image, details, price, review, discount} = allservice;

    
   
    useEffect(()=>{
      document.title = 'FastFood Services';
  }, [])
    const viewPhoto = () =>{
      return (
       <div></div>
      )
   }
    
    return (
     
      
        <div className="card lg:w-96 md:w-96 sm:w-28 bg-base-100 shadow-xl">
        <figure><img onClick={()=>viewPhoto(image, _id)} className='h-64' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {serviceTitle}
            <div className="badge badge-secondary">{discount} off!</div>
          </h2>
          {
            details.length > 100 ?
            <p>{details.slice(0, 100)+'...'}<Link to={`/services/${_id}`}><button className="btn btn-active btn-link lowercase">View details</button></Link></p>
            :
            <p>{details}</p>
          }
          
          <h3 className='font-bold'>BDT {price}</h3>
          <p><span><HiStar className='inline-block fill-violet-500'/> </span>{review}</p>
          
          <div className="card-actions justify-start">
          <button className="btn btn-secondary">Order Now!</button>
          
          </div>
        </div>
        </div>
       
    );
};

export default ServiceItem;