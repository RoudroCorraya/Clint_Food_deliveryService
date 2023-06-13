import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import loginimg from '../../../src/assets/login/signup.jpg';
import { Link, Navigate } from 'react-router-dom';
import { AuthContex } from '../../Contexts/AuthProvider';
import { useEffect } from 'react';


const SignUp = () => {
    const {createUser, googleSignUp} = useContext(AuthContex);
    // console.log('create user', createUser);
     //changing title start
     useEffect(()=>{
        document.title = 'FastFood signUp';
    }, [])
    //changing title end
    
    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmpass = form.confirmpassword.value;
        const phone = form.phone.value;


        // mongodb inserting by post method
        
       

        createUser(email, password)
        .then(result => {
            const user = result.user;
            fetch('https://personal-server-foodservice.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
        }) 
        .catch(err =>{
            console.error(err);
        })  
        
        })
        .catch( error =>{
            console.error(error);
        })
        form.reset();
    }
    const handleGoogleSignUp = () =>{
        googleSignUp()
        .then(result =>{
            const user = result.user;
            fetch('https://personal-server-foodservice.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
        }) 
        .catch(err =>{
            console.error(err);
        })  
        
            // console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
      

       
    }
   
    return (
        <div className='flex justify-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='w-24 h-24 mx-auto'><img src={loginimg} alt="Shoes" /></figure>
                {/* <h4 className='font-semibold mx-auto'>Sign Up</h4> */}
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                    <label className='my-4  font-semibold'>Email</label>
                    <input className=' py-2 w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='email' placeholder='' name='email'/>
                    <label className='my-4 font-semibold'>Password</label>
                    <input className=' py-2 w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='password' placeholder='' name='password'/>
                    <label className='my-4 font-semibold'>Confirm Password</label>
                    <input className=' py-2 w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='password' placeholder='' name='confirmpassword'/>
                    <label className='my-4 font-semibold'>Phone Number</label>
                    <input className=' py-2 w-full bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='text' placeholder='' name='phone'/>
                    
                    <div className='flex justify-center'>
                    <button type='submit' className='w-1/3  my-6 bg-cyan-500 hover:bg-cyan-600 rounded-lg'>SignUp</button>
                    </div>
                    
                   
                    </form>
                    <button onClick={handleGoogleSignUp}><FaGoogle className=' mx-auto font-medium text-4xl'/></button>
                    <p className='mx-auto'>
                        Al ready have an account? 
                        <Link to='/login' className='text-sky-500'>logIn</Link>
                    </p>
                    
                </div>
                </div>
        </div>
    );
};

export default SignUp;