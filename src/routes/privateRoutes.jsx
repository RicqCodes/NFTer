import { Route } from "react-router-dom";

import Layout from "../layout/Layout";
import NFTPage from "../pages/NFTPage";
import ProtectedRoute from "./routesManager/ProtectedRoutes";

export const privateRoutes = (
  <Route element={<ProtectedRoute />}>
    <Route element={<Layout />}>
      <Route path="/nfts" element={<NFTPage />} />
    </Route>
  </Route>
);
