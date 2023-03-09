import { Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { publicRoutes } from "./routes/publicRoutes";
import { privateRoutes } from "./routes/privateRoutes";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>{publicRoutes}</Routes>
      <Routes>{privateRoutes}</Routes>
    </>
  );
};

export default App;
