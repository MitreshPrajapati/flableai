import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthenticationPage from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = ({ hamState }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home hamState={hamState} />
          </PrivateRoute>
        }
      />
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
};

export default AllRoutes;
