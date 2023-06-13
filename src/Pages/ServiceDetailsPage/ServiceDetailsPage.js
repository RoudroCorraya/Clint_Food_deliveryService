import React from 'react';


import { Link, useLoaderData } from 'react-router-dom';

import ServicePage from './ServicePage';
import Review from '../Review/Review';
import ServiceReview from '../Review/ServiceReview';
import ShowReview from '../Review/ShowReview';



const ServiceDetailsPage = () => {
   const reviews = useLoaderData();
   console.log('review new', reviews);
   
    
    return (
        <div> 
          <ServicePage></ServicePage>
          <ServiceReview></ServiceReview>
          
            
        </div>
    );
};

export default ServiceDetailsPage;