import React from 'react';
import aboutme from '../../../src/assets/aboutme/chef-kitchen_23-2148006182.avif';
import tittleline from '../../../src/assets/titleline/titlelinw.png';

const AboutMe = () => {
    return (
        <div>
            <h3 className='font-medium text-4xl text-center my-5'>About Me</h3>
             <img className='mx-auto' src={tittleline} alt='titleline.png' ></img>
            <div className="flex w-full my-10">
            
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 flex-grow card rounded-box place-items-center">
        <div className='w-full'>
            <img className='rounded-box w-2/3 mx-auto' src={aboutme} alt='aboutme.js'></img>
        </div>
        <div className='mx-6 pb-9'>
        <h3 className='font-medium text-2xl text-center my-5'>I am Mr. Mokles</h3>
        <p>For many people, cooking is nothing but a chore, and something that they derive no pleasure from whatsoever. I wish it wasn’t that way, which is why I am publishing this piece intending to encourage and  inspire people to get into cooking, and actually try to enjoy it. For people who love cooking but are not professional chefs, what is it about cooking that you really love most and how would you encourage people to get more into cooking? All comments welcome. Your comments will be published in an article intended to inspire people to try cooking and trying new recipes for enjoyment.</p>

        </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;