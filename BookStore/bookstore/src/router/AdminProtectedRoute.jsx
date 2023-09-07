import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({children}) => {
    if(localStorage.getItem('admin-token')) {
        return children
    }
    return <Navigate to='/admin-login'/>
}

export default AdminProtectedRoute