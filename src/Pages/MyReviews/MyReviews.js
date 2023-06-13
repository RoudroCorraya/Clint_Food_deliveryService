import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContex } from '../../Contexts/AuthProvider';
import ShowReview from '../Review/ShowReview';
import { HiStar } from 'react-icons/hi';
import EachUserReview from './EachUserReview';
import { useLoaderData } from 'react-router-dom';


const MyReviews = () => {
    const {user, logOut} = useContext(AuthContex);
    
    const [myReviews, setMyReview] = useState([]);
    const [deletedreview, setDeletedreview] = useState(false);

    useEffect(()=>{
        fetch(`https://personal-server-foodservice.vercel.app/myreviews?userEmail=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem('fastFoodService-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
              return logOut();
            }
            return res.json()
        }
            
        )
        .then(data => setMyReview(data))
    },[user?.email, deletedreview, logOut])

    const dleteHandle = (_id) =>{
        console.log('delete _id', _id);
        fetch(`https://personal-server-foodservice.vercel.app/myreviews/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){

                setDeletedreview(!deletedreview)
                
                alert('are sure to deleite ?');
                
            }
            alert('deleted Sucessfully');
        });
        
       }
        //changing title start
    useEffect(()=>{
        document.title = 'FastFood Myreview';
    }, [])
    //changing title end
       
    return (
        
        <div className="overflow-x-auto w-full">
           
        <table className="table w-full">
            {/* head */}
            <thead>
            <tr>
               
                <th>Service name</th>
                <th> Comment</th>
                <th>Review Out Of 5</th>
                <th className='flex justify-center'>Action</th>

            </tr>
            </thead>
            
            <tbody>
                
                {
                    myReviews.map(myReview => <EachUserReview key={myReview._id} myReview={myReview} setMyReview={setMyReview} dleteHandle={dleteHandle}></EachUserReview>)
                }
                
            </tbody>
            
            
        </table>
        </div>
          
       
    );
};

export default MyReviews;