import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

import NftCard from "../../nft/NftCard";
import { useWeb3 } from "@/utils/hooks/useWeb3";
import { getNFTsFromWallet } from "@/utils/modules/nftToken";
import { device, color } from "@/styles/reuseable/utils.styled";

const NftList = () => {
  const { allNFTs, setAllNFTs, account, isEthereum, isConnected } = useWeb3();
  const [isLoading, setIsLoading] = useState(true);

  const getNft = async () => {
    const data = await getNFTsFromWallet(account);
    setAllNFTs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    account && getNft();
  }, [account]);

  return (
    <>
      {!isEthereum && isConnected && (
        <WarningText>
          You are on a wrong chain. Connect wallet to Ethereum network
        </WarningText>
      )}
      {!isConnected && <WarningText>Please connect your wallet!</WarningText>}:
      {isConnected && isEthereum && (
        <NftListElement>
          {isLoading ? (
            <Center>
              <ThreeCircles
                height="40"
                width="40"
                color={color("primary", 900)}
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
              <span>Loading NFTs...</span>
            </Center>
          ) : (
            <CardContent>
              {allNFTs?.length > 0 && isEthereum ? (
                allNFTs?.map((nft, index) => {
                  return <NftCard key={index} nft={nft} />;
                })
              ) : (
                <WarningText>
                  You don't have any NFT on this wallet!
                </WarningText>
              )}
            </CardContent>
          )}
        </NftListElement>
      )}
    </>
  );
};

export default NftList;

const NftListElement = styled.div`
  width: 100%;
  padding-top: 48px;
`;

const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  ${() => device.down("md")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${() => device.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${() => device.down("xs")} {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
  }
`;

const Center = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
`;

const WarningText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
