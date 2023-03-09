import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";

import NftModal from "./NftModal";
import alt from "../../assets/alt.jpg";
import { useToggle } from "@/utils/hooks/useToggle";
import { color, shadow } from "@/styles/reuseable/utils.styled";

const NftCard = ({ nft }) => {
  const { toggle, toggleRef, handleToggle, toggledElementRef } = useToggle();

  return (
    <>
      <NftCardContainer
        onClick={() => (nft ? handleToggle : null)}
        ref={toggleRef}
        data-aos="slide-up"
      >
        <CardHeader>
          <p>
            <strong>P.</strong>
          </p>
          <small>
            <strong>{nft?.name || "Prince"}</strong>
          </small>
        </CardHeader>
        <CardBody>
          <CardImage>
            {nft?.image ? (
              <img src={nft?.image} alt="" />
            ) : alt ? (
              <img src={alt} alt="" />
            ) : (
              <NoImage>?</NoImage>
            )}
          </CardImage>
          <div>
            <small>#{nft?.tokenId | "1234"}</small>
            <div>
              <BsArrowRightShort size="24" />
            </div>
          </div>
        </CardBody>
      </NftCardContainer>
      {toggle && (
        <NftModal
          nft={nft}
          handleToggle={handleToggle}
          toggledElementRef={toggledElementRef}
        />
      )}
    </>
  );
};

export default NftCard;

const NftCardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid ${() => color("primary", 700)};
  height: 400px;
  max-height: 400px;
  padding: 12px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  transition: ease 0.5s;
  background: #fff;
  cursor: pointer;
  box-shadow: none;
  bottom: 0;

  &:hover,
  &:active {
    bottom: 30px;
    box-shadow: ${() => shadow("xxxl")};
  }
`;

const CardHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const CardBody = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${() => color("primary", 100)};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid ${() => color("primary", 100)};

  img {
    width: 100%;
    height: 100%;
  }
`;

const NoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 64px;
`;
