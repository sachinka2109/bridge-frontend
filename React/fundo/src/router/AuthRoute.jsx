import React from 'react'
import { Navigate,useLocation } from 'react-router-dom';

let AuthRoute = ({children}) => {
    const location = useLocation(); 
    const token = localStorage.getItem('token');
    if(!token) {
        // console.log('this is  auth route')
        return children
    }
    return <Navigate to='/dashboard' replace state={{ from: location }}/>
}

export default AuthRoute