import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar, FaBeer } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';
import { AuthContex } from '../../Contexts/AuthProvider';



const ShowReview = ({review, serviceinfo}) => {
    const {userPhotoUrl, userEmail, reviewText, rate, displayName} = review;
    const {image, serviceTitle} = serviceinfo;
    
    
    
    return (
        
            <tr> 
                 <td>
                     <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={userPhotoUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{displayName}</div>
                            <div className="text-sm opacity-50">Banglaesh</div>
                            </div>
                        </div>
                     </td>
                     <td>
                            
                        
                        <span className="badge badge-ghost badge-sm">{reviewText}</span>
                </td>
                <td><HiStar className='fill-violet-500 inline-block' /> {rate}</td>
                        <th>
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <p>{serviceTitle}</p>
                            </th>
            </tr>
    );
};

export default ShowReview;