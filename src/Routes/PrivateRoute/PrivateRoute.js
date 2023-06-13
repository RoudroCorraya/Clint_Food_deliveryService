import React, { useContext } from 'react';
import { AuthContex } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;