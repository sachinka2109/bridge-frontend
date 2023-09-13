import React from 'react'
import { Navigate } from 'react-router-dom';

let AdminAuthRoute= ({children}) => {
    if(localStorage.getItem('admin-token') === undefined || localStorage.getItem('admin-token') === null) {
        // console.log('this is  auth route')
        return children
    }
    return <Navigate to='/admin/products' />
}


export default AdminAuthRoute