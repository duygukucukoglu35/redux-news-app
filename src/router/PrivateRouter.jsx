import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    // const user=true;
    const {user}=useSelector((state)=>state.auth)
    console.log(user)

  return user?.email? <Outlet/> : <Navigate to="/login" />
 
}

export default PrivateRouter