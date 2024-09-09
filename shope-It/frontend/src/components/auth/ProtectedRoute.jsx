import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../layout/Loader";
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />; //if i relaod the page i am in the same page

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;

//if i relaod the page i am in the same page
//if user is not authenticated simply move to the /login page and replace the entire url
