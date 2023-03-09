import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useWeb3 } from "@/utils/hooks/useWeb3";

function ProtectLandingPage() {
  const { isConnected } = useWeb3();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate("/nfts");
    }
  }, [isConnected]);

  return <Outlet />;
}

export default ProtectLandingPage;
