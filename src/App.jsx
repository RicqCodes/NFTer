import { useEffect } from "react";
import { Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { publicRoutes } from "./routes/PublicRoutes";
import { privateRoutes } from "./routes/PrivateRoutes";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        {publicRoutes}
        {privateRoutes}
      </Routes>
    </>
  );
};

export default App;
