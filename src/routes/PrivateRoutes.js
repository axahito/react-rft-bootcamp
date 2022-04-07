import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import GuestLayout from "../commons/layouts/guest/GuestLayout";

function PrivateRoutes() {
  const isAuthenticated = false;
  return isAuthenticated ? (
    <GuestLayout>
      <Outlet />
    </GuestLayout>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoutes;
