import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/logo.PNG';
import { AuthContex } from '../../../Contexts/AuthProvider';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import './Header.css';



const Header = () => {
  const {user, logOut} = useContext(AuthContex);
  console.log(user);
  const handleLogOut = () =>{
    logOut()
   .then(()=>{

   })
   .catch(error => console.error(error))
  }
    return (
        <div className="navbar bg-base-300 w-full">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
        {user?.uid  ?
        <>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/aboutme'>About</Link></li>
        <li><Link to='/allservices'>Services</Link></li>
        <li><Link to='/addservices'>Add Service</Link></li>
        <li className='hidden md:block'><Link to='/myReviews'>My Reviews</Link></li>
        </>
        :
        <>
        <li><Link to='/'>Homepage</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/aboutme'>About</Link></li>
        <li><Link to='/allservices'>Services</Link></li>
        
        </>

        }
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  
   <Link to={'/'} className="btn btn-ghost normal-case text-xl ">
        <img className='' width={100} src={logo} alt='logo.png'></img>
    </Link>
   
  </div>
  <div className="navbar-end">
    {
      user?.uid ? 
      <>
        {user?.photoURL ?
        <img className='rounded-full w-12 h-12 hidden md:block' src={user.photoURL} alt='user.png'/>
        :
          <Link><FaUser className='text-3xl'/></Link>
        }
      
      <button onClick={handleLogOut} className="btn">LogOut</button>
      </>
      
      :
      <>
      <Link to='/signup'><button className="btn">SignUp</button></Link>
      </>
    }
  
    
  </div>
</div>
    );
};

export default Header;