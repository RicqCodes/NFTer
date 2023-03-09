import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Container } from "@/styles/reuseable/element.styled";

const Layout = () => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;

const LayoutContainer = styled(Container)`
  padding: 24px;
`;
const Main = styled.div`
  width: 100%;
`;
