import React from 'react';
import review1 from '../../../assets/topReview/smiling9.webp';
import review2 from '../../../assets/topReview/smiling11.webp';
import review3 from '../../../assets/topReview/smiling10.jpg';
import review4 from '../../../assets/topReview/smiling13.jpg';
import tittleline from '../../../assets/titleline/titlelinw.png';



const TopReview = () => {
    return (
        <div >
            <div className='my-24'>

            
            <h2 className='text-4xl font-medium my-5 text-center'>Top Reviews</h2>
            <div className='text-center mb-24'>
            <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
           {/* <div className='sliderReview grid grid-cols-2'>
                <div className='w-full'>
                    <img className='rounded-full' src={review1} alt='review.png'></img>
                </div>
                <div className='text-center my-auto'>
                    <p className=''>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"</p>
                </div>
           </div> */}



          
           <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full block">
                    <div className='review'>
                    <img src={review1} className="w-64 h-64 mx-auto rounded-full" alt='imase.png' />
                    </div>
                    <div className=''>
                    <p className='w-3/4 text-center mx-auto my-8 bg-base-300 py-14 px-14 rounded-bl-3xl rounded-tr-3xl'>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"</p>
                    </div>
                </div> 
                <div id="item2" className="carousel-item w-full block">
                <div className='review'>
                    <img src={review2} className="w-64 h-64 mx-auto rounded-full" alt='imase.png' />
                    </div>
                    <div className=''>
                    <p className='w-3/4 text-center mx-auto my-8 bg-base-300 py-14 px-14 rounded-bl-3xl rounded-tr-3xl'>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"</p>
                    </div>
                </div> 
                <div id="item3" className="carousel-item w-full block">
                <div className='review'>
                    <img src={review3} className="w-64 h-64 mx-auto rounded-full" alt='imase.png' />
                    </div>
                    <div className=''>
                    <p className='w-3/4 text-center mx-auto my-8 bg-base-300 py-14 px-14 rounded-bl-3xl rounded-tr-3xl'>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"</p>
                    </div>
                </div> 
                <div id="item4" className="carousel-item w-full block">
                <div className='review'>
                    <img src={review4} className="w-64 h-64 mx-auto rounded-full" alt='imase.png' />
                    </div>
                    <div className=''>
                    <p className='w-3/4 text-center mx-auto my-8 bg-base-300 py-14 px-14 rounded-bl-3xl rounded-tr-3xl'>"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look"</p>
                    </div>
                </div>
                </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
            </div>
            </div>
           
         
        
        </div>
    );
};

export default TopReview;