import React, { useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectedRoutes() {
  const { isConnected } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      <Navigate to="/" />;
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectedRoutes;
