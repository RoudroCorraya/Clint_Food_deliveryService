import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import noReviews  from '../../../src/assets/NoReviews/no-review-found.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const EachUserReview = ({myReview, dleteHandle}) => {
    const {reviewText, rate, displayName, serviceId, serviceImage, serviceTitle, userUid, _id} = myReview;
    
    
    //  const dleteHandle = (_id) =>{
    //     console.log('delete _id', _id);
    //     fetch(`https://personal-server-foodservice.vercel.app/myreviews/${_id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         if(data.deleteCount > 0){
    //             alert('review deleted seccessfuly');
                
    //         }
    //     });
    //    }
     //changing title start
     useEffect(()=>{
      document.title = 'FastFood Review';
  }, [])
  //changing title end
                  
    
    return (
           
                
                    
                  <tr>  
                <td>
                
                    <div className="flex items-center space-x-3">
                    
                           <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                               <img src={serviceImage} alt="Avatar Tailwind CSS Component" />
                           </div>
                           </div>
                           <div>
                           <div className="font-bold">{serviceTitle}</div>
                           <div className="text-sm opacity-50">{displayName}</div>
                           </div>
                       </div>
                    </td>
                    <td>
                           
                       
                       <span className="badge badge-ghost badge-sm">{reviewText}</span>
               </td>
               <td><HiStar className='fill-violet-500 inline-block' /> {rate}</td>
                       <th className='flex justify-center'>
                     
                     <Link to={`/update/${_id}`}>
                     <button className='btn mx-3'>Edit</button>
                     </Link>
                      
                       <button onClick={()=>dleteHandle(_id)} className="btn ">Dlete</button>
                       </th>
           </tr>
                
          
            
                
          
       
       
    );
};

export default EachUserReview;