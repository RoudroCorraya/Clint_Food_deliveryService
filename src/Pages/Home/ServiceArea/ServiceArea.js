import React from 'react';
import tittleline from '../../../assets/titleline/titlelinw.png';
import serviceArea from '../../../assets/servicearea/delivery.webp';
import serviceArea2 from '../../../assets/servicearea/delivery1__2_-removebg-preview.png';

const ServiceArea = () => {
    return (
        <div className='my-3.5 '>
           
            <h2 className='text-4xl font-medium my-5 text-center'>Service Area</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-8 rounded-s-xl">
                <div className=' flex justify-evenly self-center'>
                    <div className=''>
                        <ul>
                            <li className='my-2.5 font-semibold'>Mahamadpur</li>
                            <li className='my-2.5 font-semibold'>Uttara</li>
                            <li className='my-2.5 font-semibold'>Khilkhet</li>
                            <li className='my-2.5 font-semibold'>Tejgaon</li>
                            <li className='my-2.5 font-semibold'>Dhanmondi</li>
                            <li className='my-2.5 font-semibold'>Paltan</li>
                            <li className='my-2.5 font-semibold'>Motijheel</li>
                        </ul>
                    </div>
                    <div className=''>
                    <ul>
                            <li className='my-2.5 font-semibold'>Rampura</li>
                            <li className='my-2.5 font-semibold'>Lalbagh</li>
                            <li className='my-2.5 font-semibold'>Shahbagh</li>
                            <li className='my-2.5 font-semibold'>Puran dhaka</li>
                            <li className='my-2.5 font-semibold'>Hazaribagh</li>
                            <li className='my-2.5 font-semibold'>Keraniganj</li>
                            <li className='my-2.5 font-semibold'>New Market</li>
                        </ul>
                    </div>
                    <div className=''>
                    <ul>
                            <li className='my-2.5 font-semibold'>Badda</li>
                            <li className='my-2.5 font-semibold'>Farm Gate</li>
                            <li className='my-2.5 font-semibold'>Mirpur</li>
                            <li className='my-2.5 font-semibold'>Mohakhali</li>
                            <li className='my-2.5 font-semibold'>Komlapur</li>
                            <li className='my-2.5 font-semibold'>Mogbajar</li>
                            <li className='my-2.5 font-semibold'>Bosundhara</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <div className="w-4/4 h-3/4 rounded-lg my-auto">
                    <img className='rounded-lg w-4/5 h-80 mx-auto' src={serviceArea} alt='dhaka.png' />
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceArea;