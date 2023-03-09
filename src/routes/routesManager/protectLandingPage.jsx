import React, { useEffect } from "react";
import { Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Web3 from "web3";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectLandingPage() {
  const { isConnected, account } = useWeb3();
  const navigate = useNavigate();
  console.log(isConnected);

  useEffect(() => {
    if (isConnected) {
      navigate("/nfts");
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectLandingPage;
