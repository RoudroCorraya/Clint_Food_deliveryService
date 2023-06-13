import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceItem from './ServiceItem';
import tittleline from '../../../assets/titleline/titlelinw.png';
import Loading from '../../Loading/Loading';
import AuthProvider, { AuthContex } from '../../../Contexts/AuthProvider';



const Services = () => {
    const allServices = useLoaderData();
    //changing title start
    const {loading} = useContext(AuthContex);
    useEffect(()=>{
        document.title = 'FastFood service';
    }, [])
    //changing title end
    return (
       
        <div>
            <h2 className='text-4xl font-medium my-5 text-center'>My Services</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
            
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 my-3.5'>
            

        {
            allServices.slice(0, 3).map(allservice => <ServiceItem key={allservice.id} allservice={allservice}></ServiceItem>)
        }

      </div>
      
      <div className='text-center'>
      <Link to='/allservices'><button className="btn btn-active btn-secondary my-5">See All Service</button></Link>
      </div>
      </div>
    );
};

export default Services;