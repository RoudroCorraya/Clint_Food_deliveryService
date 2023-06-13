import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import tittleline from '../../../src/assets/titleline/titlelinw.png';
import { HiStar } from 'react-icons/hi';
import { AuthContex } from '../../Contexts/AuthProvider';
import logInFirst from '../../../src/assets/login/logInFirst.jpg';
import writeReview from '../../../src/assets/NoReviews/Reviews.jpg';


const ServicePage = () => {
  
  const data = useLoaderData();
  // console.log('service data', data);
  const {_id, serviceTitle, image, details, price, review, discount, deliveryTime} = data;
  
  

     
const {user} = useContext(AuthContex);
const reviewSystem = (event) =>{
    event.preventDefault();
    const form = event.target;
    const reviewText = form.reviewText.value;
    const rate = form.rate.value;
    const userId = user._id;
    const userUid = user.uid;
    const displayName = user.displayName;
    const userPhotoUrl = user.photoURL;
    const userEmail = user.email;
    console.log(reviewText, rate);
    const reviews = {
      serviceId : _id,
      serviceTitle: serviceTitle,
      serviceImage: image,
      userId,
      userUid,
      userPhotoUrl,
      userEmail,
      reviewText,
      rate,
      displayName


    }
    
 
    
  //review code start
  fetch('https://personal-server-foodservice.vercel.app/reviews', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(reviews)
  })
  .then(res => res.json())
  .then(data => {
    console.log('reviews new', data);
    if(data){
      alert('review added sucessfully');
    }
    
  })
  .catch(err => console.error(err))
  //review code end
  form.reset();
  }
          
   
    return (
        <div>
           <div className='addModal'>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative text-center">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <form onSubmit={reviewSystem}>
                <img className='mx-auto w-28 h-28' src={writeReview} alt='titleline.png' ></img>
                <h3 className='font-semibold text-2xl text-center my-5'>Write Your Reviews!</h3>
                  
                  <textarea className='w-full  bg-cyan-900 hover:bg-cyan-600 rounded-lg h-32' type='text' placeholder='Text Here...' name='reviewText'></textarea>
                  <input className='w-full  bg-cyan-900 hover:bg-cyan-600 rounded-lg h-11 my-2' type='text' placeholder='Rate the Product Out of 5' name='rate'></input>
                  <button className='btn  bg-cyan-900 hover:bg-cyan-600 rounded-lg my-4' type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
           <div className='addModal'>
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative text-center">
                <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <img className='mx-auto' src={logInFirst} alt='titleline.png' ></img>
                <h3 className='font-medium text-2xl text-center my-5'>You have to LogIn To Add Review!</h3>
            
               
                <Link to='/login'><button className='btn'>LogIn</button></Link>
              </div>
            </div>
          </div>
             <h3 className='font-medium text-4xl text-center my-5'>{serviceTitle} Service Available!!!</h3>
            <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            
            <div className="card lg:w-1/2 md:w-full sm:w-full mx-auto my-10 bg-base-100 shadow-xl">
        <figure ><img  className='' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {serviceTitle}
            <div className="badge badge-secondary">{discount} off!</div>
          </h2>
          
            
            <p>{details}</p>
            <p className='font-semibold'>Delivery On : {deliveryTime}</p>
          
          
          <h3 className='font-bold'>BDT {price}</h3>
          <p><span><HiStar className='inline-block fill-violet-500'/> </span>{review}</p>
          
          <div className="card-actions justify-start">
          <button className="btn btn-secondary">Order Now!</button>
          {user?.uid ?
            <label htmlFor="my-modal-3" className="btn"> Add reviews</label>
            :
            <label htmlFor="my-modal-4" className="btn"> Add reviews</label>
          }
          
          
          </div>
        </div>
        </div>
        </div>
    );
};

export default ServicePage;