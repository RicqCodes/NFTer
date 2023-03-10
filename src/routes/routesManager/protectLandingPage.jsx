import React, { useEffect } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import Web3 from "web3";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectLandingPage() {
  const { isConnected } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      // navigate("/nfts");
      <Navigate to="/nfts" />;
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectLandingPage;
