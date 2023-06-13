import React from 'react';
import tittleline from '../../../assets/titleline/titlelinw.png';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceTitle = form.serviceTitle.value;
        const image = form.image.value;
        const details = form.details.value;
        const price = form.price.value;
        const deliveryTime = form.deliveryTime.value;
        const review = form.review.value;
        const discount = form.discount.value;
        console.log('addservice cheaking', serviceTitle, image, details, deliveryTime)

        const services = {
            serviceTitle,
            image,
            details,
            price,
            deliveryTime,
            review,
            discount
        }
        // insert mongodb in post method start
        fetch('https://personal-server-foodservice.vercel.app/services', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('service added sucessfully');
            form.reset();
        })
        .catch(err => console.error(err))
        // insert mongodb in post method end

    }
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-medium my-5 text-center'>Add service</h2>
            <div className='text-center'>
                <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            </div>
           
            <form onSubmit={handleAddService}>
                
            <div className=''>
                <label className='block text-xl font-medium'>Service Title</label>
            <input type="text" name='serviceTitle' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>ImageUrl</label>
            <input type="text" name='image' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>Detailes</label>
            <textarea type="text" name='details' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>price</label>
            <input type="text" name='price' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>Dekivery Time</label>
            <input type="text" name='deliveryTime' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>Review</label>
            <input type="text" name='review' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <div>
            <label className='block text-xl font-medium'>Discount</label>
            <input type="text" name='discount' placeholder="Type here" className="input input-ghost w-full max-w-xs  bg-cyan-500 hover:bg-cyan-600 rounded-lg" />
            </div>
            <button type='submit' className='btn btn-info my-4 bg-cyan-500 hover:bg-cyan-600'>Submit</button>
           
            </form>
        </div>
    );
};

export default AddService;