import React, { useEffect } from "react";
import { Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectedRoutes() {
  const { isConnected, account } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      <Navigate to="/" />;
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectedRoutes;
