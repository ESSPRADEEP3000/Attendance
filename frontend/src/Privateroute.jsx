import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser} from './Auth/userProvider';

const PrivateRoute = ({ element, ...props }) => {
  const { user } = useUser();
  const role=localStorage.getItem('role');
//   console.log(role,props.role);
  return user ?role===props.role?(
    element): (
    <Navigate to="/not-found" replace state={{ from: props.path }} />
  ):(<Navigate to="/login" replace state={{ from: props.path }} />);
};

export default PrivateRoute;
