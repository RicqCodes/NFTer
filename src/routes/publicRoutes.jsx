import { Route } from "react-router-dom";

import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ProtectLandingPage from "./routesManager/protectLandingPage";

export const publicRoutes = (
  <>
    <Route element={<ProtectLandingPage />}>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Route>
  </>
);
