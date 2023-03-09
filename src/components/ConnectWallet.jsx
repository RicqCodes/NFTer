import styled from "styled-components";
import { TfiAngleRight } from "react-icons/tfi";

import metamask from "@/assets/wolf.svg";
import { useWeb3 } from "@/utils/hooks/useWeb3";
import { color } from "@/styles/reuseable/utils.styled";

const ConnectWallet = () => {
  const { isConnected, connectWallet } = useWeb3();
  return (
    <>
      <Content>
        <span>Choose your preferred wallet:</span>
        <Wallets>
          <Wallet onClick={connectWallet}>
            <div>
              <img src={metamask} alt="" />
              <span>
                <strong>Metamask</strong>
              </span>
            </div>
            <TfiAngleRight />
          </Wallet>
        </Wallets>
        {isConnected === false && (
          <ErrorText>
            <small>
              You don't have metamask installed, please install{" "}
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
              >
                Metamask
              </a>
            </small>
          </ErrorText>
        )}
      </Content>
    </>
  );
};

export default ConnectWallet;

const Content = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Wallets = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Wallet = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-radius: 8px;
  background: ${() => color("primary", 50)};
  cursor: pointer;

  > div {
    display: flex;
    gap: 18px;
    align-items: center;
  }
`;

const ErrorText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: underline;
  }
`;
