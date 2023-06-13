import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowReview from './ShowReview';

const ReviewID = () => {
    const reviewData = useLoaderData();
    console.log('last', reviewData);
    const {userPhotoUrl, userEmail, reviewText, displayName, rate} = reviewData;
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
                            reviewData.map(review => <ShowReview key={review._id} review={review}></ShowReview>)
                        }
                    </tbody>
                    
                    
                </table>
                </div>
        </div>
    );
};

export default ReviewID;