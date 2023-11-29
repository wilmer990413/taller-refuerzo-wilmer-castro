import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../data/AuthContext';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    if(isAuthenticated){
        return (
            <Outlet/>
        );
    }else{
        return <Navigate to = "/taller-refuerzo-wilmer-castro/login"/>;
    }
};

export default PrivateRoute;