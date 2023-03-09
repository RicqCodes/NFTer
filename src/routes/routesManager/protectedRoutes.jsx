import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectedRoute() {
  const { isConnected } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectedRoute;
