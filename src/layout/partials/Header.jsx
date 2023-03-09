import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { BiWallet } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";

import ConnectWallet from "../../components/ConnectWallet";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import MenuToggle from "@/components/MenuToggle";
import { useToggle } from "@/utils/hooks/useToggle";
import { useModal } from "@/utils/hooks/useModal";
import { useWeb3 } from "@/utils/hooks/useWeb3";
import { color, shadow, device } from "@/styles/reuseable/utils.styled";
import { reduceAddress } from "../../utils/helpers";

const Header = () => {
  const { toggle, toggleRef, handleToggle } = useToggle();
  const { toggle: modalToggle, setModalOptions } = useModal();
  const { account, isEthereum, isConnected } = useWeb3();
  const location = useLocation();

  return (
    <>
      <HeaderElement>
        <Content>
          <Logo />
          <Navigation $toggle={toggle}>
            <Nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/nfts">NFTs</NavLink>
                </li>
              </ul>
            </Nav>
            <Connect>
              {location.pathname === "/nfts" && (
                <>
                  {isEthereum === false ? (
                    <WrongNetwork>Wrong Network</WrongNetwork>
                  ) : (
                    ""
                  )}
                </>
              )}
              {isConnected ? (
                <Wallet>
                  {<FaWallet />}
                  {`${reduceAddress(account)}`}
                </Wallet>
              ) : (
                <Button
                  variant="outline"
                  ref={modalToggle.toggleRef}
                  onClick={() => {
                    modalToggle.handleToggle();
                    setModalOptions((prev) => ({
                      ...prev,
                      content: <ConnectWallet />,
                    }));
                  }}
                >
                  Connect wallet <BiWallet />
                </Button>
              )}
            </Connect>
          </Navigation>
        </Content>
        <MenuToggle
          toggle={toggle}
          toggleRef={toggleRef}
          handleToggle={handleToggle}
        />
      </HeaderElement>
    </>
  );
};

export default Header;

const HeaderElement = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
  width: 100%;

  > div:nth-child(2) {
    display: flex;
    gap: 56px;

    ${() => device.up("sm")} {
      width: 100%;
      align-items: center;
    }
  }
`;

const Connect = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;

  ${() => device.down("sm")} {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    align-items: center;

    li {
      a {
        color: ${() => color("primary", 300)};
      }
    }
  }

  a.active {
    color: ${() => color("primary", 800)};
  }
`;

const Navigation = styled.div`
  ${() => device.down("sm")} {
    width: 260px;
    position: fixed;
    top: 0;
    height: 100vh;
    background: ${() => color()};
    box-shadow: ${() => shadow("xxxl")};
    flex-direction: column;
    z-index: 999;
    align-items: initial;
    padding: 24px 32px;
    justify-content: center;
    transition: ease-in 0.2s;

    ${({ $toggle }) => {
      return css`
        left: ${$toggle ? "0px" : "-300px"};
      `;
    }}

    ul {
      flex-direction: column;
      justify-content: center;
      align-items: initial;
    }

    ${Connect} {
      margin-left: initial;
    }
  }
`;

const Wallet = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 22px;
  border: 2px solid rgb(30, 37, 43);
  border-radius: 50px;
`;

const WrongNetwork = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  background-color: #b30000;
  border-radius: 50px;
  color: #fff;
`;
