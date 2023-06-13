

import { useContext, useEffect } from 'react';
import tittleline from '../../../src/assets/titleline/titlelinw.png';
import { useLoaderData } from 'react-router-dom';
import ShowReview from './ShowReview';
import { AuthContex } from '../../Contexts/AuthProvider';





const Review = () => {
    const reviews = useLoaderData();
    console.log('review geting', reviews);
    const {user} = useContext(AuthContex);

    // reviview sytem emplement start
    const reviewSystem = (event) =>{
        event.preventDefault();
        const form = event.target;
        const reviewText = form.reviewText.value;
        const rate = form.rate.value;
        const userId = user._id;
        const displayName = user.displayName;
        const userPhotoUrl = user.photoURL;
        const userEmail = user.email;
        console.log(reviewText, rate);
        const reviews = {
        //   serviceId : _id,
          userId,
          userPhotoUrl,
          userEmail,
          reviewText,
          rate,
          displayName
    
    
        }
        
        
      //mondgoDb insert start
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
      })
      .catch(err => console.error(err))
      //mondgoDb insert end
      
      }
    // reviview sytem emplement end
    return (
        <div>
           
            
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
                            reviews.map(review => <ShowReview key={review._id} review={review}></ShowReview>)
                        }
                    </tbody>
                    
                    
                </table>
                </div>
                {/* add review start */}
                <div className='addModal'>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                <form onSubmit={reviewSystem}>
                  <h3 className='font-semibold'>Write Your Reviews</h3>
                  <textarea className='w-full' type='text' placeholder='Text Here...' name='reviewText'></textarea>
                  <input className='w-full' type='text' placeholder='Rate the Product Out of 5' name='rate'></input>
                  <button className='btn btn-secondary' type='submit'>Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className='text-center'>
          <label htmlFor="my-modal-3" className="btn">Add reviews</label>
          </div>
          {/* add review end */}
        </div>
    );
};

export default Review;