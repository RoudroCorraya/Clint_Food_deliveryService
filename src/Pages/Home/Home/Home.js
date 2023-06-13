import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ServiceArea from '../ServiceArea/ServiceArea';
import TopReview from '../TopReview/TopReview';


const Home = () => {
    //changing title start
    useEffect(()=>{
        document.title = 'FastFood Home';
    }, [])
    //changing title end
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TopReview></TopReview>
            <ServiceArea></ServiceArea>
            
        </div>
    );
};

export default Home;