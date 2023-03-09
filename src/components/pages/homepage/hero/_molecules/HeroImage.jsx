import styled from "styled-components";

import nft1 from "@/assets/nft-1.png";
import NftCard from "@/components/nft/NftCard";
import { shadow, device } from "@/styles/reuseable/utils.styled";
import image from "../../../../../assets/alt.jpg";

const HeroImage = () => {
  return (
    <>
      <HeroImageContainer data-aos="slide-down">
        <div>
          <NftCard nft={image} />
        </div>
      </HeroImageContainer>
    </>
  );
};

export default HeroImage;

const HeroImageContainer = styled.div`
  width: calc(100% - 56px);

  > div {
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    box-shadow: ${() => shadow("xxl")};
    max-height: 600px;
  }

  ${() => device.down("sm")} {
    display: none;
  }
`;
