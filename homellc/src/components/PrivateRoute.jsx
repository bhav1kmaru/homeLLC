import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isLoggedIn}=useSelector((store)=>store.auth)
    const {pathname}=useLocation()

    if(!isLoggedIn){
        return <Navigate to="/login" state={{from:pathname}} replace />;
    }
    return children
 
}

export default PrivateRoute