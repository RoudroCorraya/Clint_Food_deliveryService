import React, { useEffect } from 'react';
import tittleline from '../../../src/assets/titleline/titlelinw.png';

const Blogs = () => {
    useEffect(()=>{
        document.title = 'FastFood Blogs';
    }, [])
    return (
        <div className='mb-10'>
            <h2 className='text-4xl font-medium my-5 text-center'>Blogs</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                Difference between SQL and NoSQL
                </div>
                <div className="collapse-content"> 
                    <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables, with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work?
                </div>
                <div className="collapse-content"> 
                    <p>JSON Web Token  is an open standard  that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content"> 
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content"> 
                    <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
                </div>
                </div>
        </div>
    );
};

export default Blogs;