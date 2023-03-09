import styled from "styled-components";

import HeroText from "./_molecules/HeroText";
import HeroImage from "./_molecules/HeroImage";
import { device } from "@/styles/reuseable/utils.styled";

const Hero = () => {
  return (
    <>
      <HeroElement>
        <Content>
          <HeroText />
          <HeroImage />
        </Content>
      </HeroElement>
    </>
  );
};

export default Hero;

const HeroElement = styled.section``;

const Content = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 56px;
  align-items: center;

  ${() => device.down("sm")} {
    grid-template-columns: 100%;
  }
`;
