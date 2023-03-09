import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillLightningFill, BsArrowRight } from "react-icons/bs";

import { FluidTitle } from "@/styles/reuseable/element.styled";
import { color, device } from "@/styles/reuseable/utils.styled";

const HeroText = () => {
  return (
    <>
      <HeroTextElement>
        <Content>
          <Text>
            <span>
              <BsFillLightningFill /> Started
            </span>
            <FluidTitle $weight="300">
              Discover <strong>Unleash</strong> the Power of Your{" "}
              <strong>Art & NFTs</strong>
            </FluidTitle>
            <p>
              Experience the Future of Digital Collectibles with Ease and
              Confidence
            </p>
          </Text>
          <Discover>
            <div>
              <Link to="/nfts">
                Discover NFTs <BsArrowRight />
              </Link>
            </div>
          </Discover>
        </Content>
      </HeroTextElement>
    </>
  );
};

export default HeroText;

const HeroTextElement = styled.section`
  padding: 32px;

  ${() => device.down("sm")} {
    padding: 32px 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;
  flex-direction: column;
`;

const Text = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  > span {
    display: flex;
    align-items: center;
    gap: 12px;

    color: ${() => color("primary", 500)};
  }

  > p {
    color: ${() => color("primary", 500)};
  }
`;

const Discover = styled.div`
  div {
    a {
      display: inline-flex;
      align-items: center;
      gap: 16px;
      font-weight: 600;
      color: ${() => color("primary", 900)};
    }

    &::before {
      content: " ";
      position: absolute;
      bottom: -20px;
      height: 5px;
      width: 60px;
      border-radius: 5px;
      background: ${() => color("primary", 900)};
    }
  }
`;
