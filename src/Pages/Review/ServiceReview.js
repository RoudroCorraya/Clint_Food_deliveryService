import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from '../../Contexts/AuthProvider';
import ShowReview from './ShowReview';
import { HiStar } from 'react-icons/hi';
import tittleline from '../../../src/assets/titleline/titlelinw.png';
import noreview from '../../../src/assets/NoReviews/no-review-found.png';

const ServiceReview = () => {
   const data = useLoaderData();
   console.log('paisiki',data)
const [reviews, setReviews] = useState([]);


useEffect(()=>{
    fetch(`https://personal-server-foodservice.vercel.app/reviews/${data._id}`)
    .then(res => res.json())
    .then(reviewData => setReviews(reviewData))
},[])
    console.log('all review come sucessfully',reviews)
    
    return (
        <div className='hidden md:block'> 
           {reviews.length > 0 ?
            <div>
                 <h3 className='font-medium text-4xl text-center my-5'>Reviews On {data.serviceTitle}</h3>
             <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
             <div className="overflow-x-auto w-full">
                 <table className="table w-full">
                     {/* head */}
                     <thead>
                     <tr>
                        
                         <th>User</th>
                         <th>Comment</th>
                         <th>Review Out Of 5</th>
                         <th>Food</th>
 
                     </tr>
                     </thead>
                     
                     <tbody>
                         {
                             reviews.map(review => <ShowReview key={review._id} review={review} serviceinfo={data}></ShowReview>)
                         }
                     </tbody>
                     
                     
                 </table>
                 </div>
            </div>
                 :
                 <div className='text-center'>
                    <div className='mx-auto w-1/2 my-32'>
                    <h3 className='font-medium text-4xl text-center my-5'>Reviews On {data.serviceTitle}</h3>
             <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
                    <img className='my-7' src={noreview} alt='noreview.png'></img>
                    </div>
                 </div>
           }
        </div>
    );
};

export default ServiceReview;