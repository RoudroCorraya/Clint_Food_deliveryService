import React from 'react';
import ServiceItem from '../Home/Services/ServiceItem';
import { useLoaderData, useNavigation } from 'react-router-dom';
import tittleline from '../../../src/assets/titleline/titlelinw.png';

const Allservices = () => {
    const allServices = useLoaderData();
    //exploring loading start
    const { state } = useNavigation();
    
    if(state === 'loading'){
        return <span className="loading loading-ring loading-lg"></span>
    }
    //exploring loading end
    
    return (
        <div className=''>
            <h2 className='text-4xl font-medium my-5 text-center'>My Services</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
            <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-3.5'>

                {
                    allServices.map(allservice => <ServiceItem key={allservice.id} allservice={allservice}></ServiceItem>)
                }

            </div>
            
        </div>
    );
};

export default Allservices;