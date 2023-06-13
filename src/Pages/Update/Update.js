import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import tittleline from '../../../src/assets/titleline/titlelinw.png';
import updateimage from '../../../src/assets/update/update.jpg';

const Update = () => {
  const storedReview = useLoaderData();
  console.log(storedReview);
  
  const [updatereview, setupdateReview] = useState(storedReview);


  const handleReviewsUpdate = (event) =>{
    event.preventDefault();
    console.log(updatereview);
    fetch(`https://personal-server-foodservice.vercel.app/update/${storedReview._id}`, {
      method : 'PUT',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updatereview)
    })
    .then( res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        alert('review Updated !');
        
      }
      console.log(data);
    })
    
  }

  const handleInputChange = (event) =>{
    const field = event.target.name;
    const value = event.target.value;
    const newReview = {...updatereview};
    newReview[field] = value;
    setupdateReview(newReview);
  }

    return (
        <div>
          <h2 className='text-4xl font-medium my-5 text-center'>Update Review</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
                
            </div>
            <div className='w-1/2 mx-auto'>
            <div className='text-center'>
            <form onSubmit={handleReviewsUpdate}>
            <img className='mx-auto w-32' src={updateimage} alt='update.png' ></img>
                  <h3 className='font-semibold my-5 text-center'>Write Your Reviews....</h3>
                  <textarea onChange={handleInputChange} className='w-full h-32  bg-cyan-500 hover:bg-cyan-600 rounded-lg' defaultValue={storedReview.reviewText} type='text' placeholder='Text Here...' name='reviewText'></textarea>
                  <input onChange={handleInputChange} className='w-full h-16  bg-cyan-500 hover:bg-cyan-600 rounded-lg' defaultValue={storedReview.rate} type='text' placeholder='Rate the Product Out of 5' name='rate'></input>
                  <button className='btn  bg-cyan-500 hover:bg-cyan-600 rounded-lg my-4' type='submit'>Update Review</button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default Update;