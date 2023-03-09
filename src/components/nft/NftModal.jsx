import styled from "styled-components";
import { MdClose } from "react-icons/md";

import { shadow } from "@/styles/reuseable/utils.styled";
import { fadein, popup } from "@/styles/reuseable/animations.styled";
import NftDetails from "./NftDetails";

const NftModal = ({ nft, toggledElementRef, handleToggle }) => {
  return (
    <>
      <ModalOverlay>
        <ModalContainer ref={toggledElementRef}>
          <ModalHeader>
            <div
              onClick={() => {
                handleToggle();
              }}
            >
              <MdClose size="24" />
            </div>
          </ModalHeader>
          <ModalBody>
            <NftDetails nft={nft} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContainer>
      </ModalOverlay>
    </>
  );
};

export default NftModal;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadein} 0.3s linear;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 650px;
  min-height: 200px;
  max-height: 600px;
  overflow: auto;
  border-radius: 8px;
  background: #fff;
  box-shadow: ${() => shadow("xxl")};
  padding: 24px;
  animation: ${popup} 0.2s linear;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-left: auto;
    cursor: pointer;
  }
`;

const ModalBody = styled.div``;

const ModalFooter = styled.div`
  padding: 12px;
`;
