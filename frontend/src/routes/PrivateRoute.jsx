import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const isAuthenticated = useSelector(state => state.AuthReducer.isAuthenticated);

  if(!isAuthenticated){
    return <Navigate  to="/auth" />;
  }
  return children;
};

export default PrivateRoute;
