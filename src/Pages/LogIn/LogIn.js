import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import loginimg from '../../../src/assets/login/login.jpg';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contexts/AuthProvider';
import { useEffect } from 'react';

const LogIn = () => {
    const {LogIn, googleSignUp} = useContext(AuthContex);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handlelogIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       
       
        LogIn(email, password)
        .then(result => {
            const user = result.user;
            console.log('register', user);
            
            
            //send jwt token through post method start
            const currentUser = {
                email : user.email
            }
            fetch('https://personal-server-foodservice.vercel.app/jwt', {
                method : 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Navigate(from, {replace: true});
            })

            //send jwt token through post method end
            form.reset();
            Navigate(from, {replace: true});
        })
        .catch( error =>{
            console.error(error);
        })
       
    }
    const handleGooglelogIn = () =>{
        googleSignUp()
        .then(result =>{
            const user = result.user;
            console.log(user);
            
            //send jwt token through post method start
            const currentUser = {
                email : user.email
            }
            fetch('https://personal-server-foodservice.vercel.app/jwt', {
                method : 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('fastFoodService-token', data.token);
                
            })

            //send jwt token through post method end
            Navigate(from, {replace: true});
        })
        .catch(error =>{
            console.error(error);
        })
    }
     //changing title start
     useEffect(()=>{
        document.title = 'FastFood LogIn';
    }, [])
    //changing title end
    return (
        <div className='flex justify-center my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='w-24 h-24 mx-auto'><img src={loginimg} alt="Shoes" /></figure>
                <h4 className='font-semibold mx-auto'>LogIn</h4>
                <div className="card-body">
                <form onSubmit={handlelogIn}>
                    <label className='my-4 font-semibold'>Email</label>
                    <input className='w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='text' placeholder='' name='email'/>
                    <label className='my-4 font-semibold'>Password</label>
                    <input className='w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg' type='password' placeholder='' name='password'/>
                    <div className='flex justify-center'>
                    <button type='submit' className='w-1/3 mx-auto my-6 bg-cyan-500 hover:bg-cyan-600 rounded-lg'>LogIn</button>
                    </div>
                    

                    </form>
                    <Link className='mx-auto' to='/'><button onClick={handleGooglelogIn}><FaGoogle className=' mx-auto font-medium text-4xl'/></button></Link>
                    <p className='mx-auto'>
                        Create new account? 
                        <Link to='/signup' className='text-sky-500'>SignUp</Link>
                    </p>
                    
                </div>
                </div>
        </div>
    );
};

export default LogIn;