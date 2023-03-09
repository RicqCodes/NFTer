import styled from "styled-components";
import { Link } from "react-router-dom";
import { SiOpensea } from "react-icons/si";

import Button from "@/components/Button";
import { shadow, device } from "../../styles/reuseable/utils.styled";

const NftDetails = ({ nft }) => {
  return (
    <>
      <NftDetailsContainer>
        <NftName>{nft?.name}</NftName>
        <div>
          <NftImage>
            <img src={nft?.image} alt={nft?.name} />
          </NftImage>
          <NftInfo>
            <div>
              <span>Name</span>
              <br />
              <small>{nft?.name}</small>
            </div>
            <div>
              <span>Token ID</span>
              <br />
              <small>#{nft?.tokenId}</small>
            </div>
            <div>
              <span>Description</span>
              <br />
              <small>{nft?.description}</small>
            </div>
            <a
              href={`https://opensea.io/assets/ethereum/${nft.tokenAddress}/${nft.tokenId}`}
              target="_blank"
            >
              <Button variant="outline">
                <SiOpensea /> Opensea
              </Button>
            </a>
          </NftInfo>
        </div>
      </NftDetailsContainer>
    </>
  );
};

export default NftDetails;

const NftDetailsContainer = styled.div`
  width: 100%;
  height: 100%;

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 50% 45%;
    gap: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
    padding: 24px 0;
    width: 100%;
    height: 100%;

    ${() => device.down("600")} {
      grid-template-columns: 100%;
    }
  }
`;

const NftName = styled.div`
  text-align: center;
  font-weight: 700;
  position: sticky;
  top: -24px;
  padding: 12px 0;
  background: #fff;
  width: 100%;
  z-index: 1;
`;

const NftImage = styled.div`
  width: 100%;
  max-width: 300px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: ${() => shadow("xxxl")};
  }
`;

const NftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 200px;

  > div > span {
    font-weight: 600;
  }
`;
