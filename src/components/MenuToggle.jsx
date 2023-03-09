import styled from "styled-components";

import { color, device } from "@/styles/reuseable/utils.styled";

const MenuToggle = ({ toggle, toggleRef, handleToggle }) => {
  return (
    <MenuIcon onClick={handleToggle} ref={toggleRef} toggle={toggle}>
      <div></div>
      <div></div>
      <div></div>
    </MenuIcon>
  );
};

export default MenuToggle;

const MenuIcon = styled.div`
  flex-direction: column;
  gap: 6px;
  display: none;
  margin-left: auto;

  ${() => device.down("sm")} {
    display: flex;
    align-items: flex-end;
  }

  div {
    height: 2px;
    background: ${() => color("primary", 900)};
    transition: ease-in-out 0.2s;
    border-radius: 5px;
  }

  div:first-child {
    width: 30px;
  }

  div:nth-of-type(2) {
    width: 25px;
  }

  div:last-child {
    width: 18px;
  }

  ${(props) =>
    props.toggle === true
      ? `

    gap: 0;

    div:first-of-type {
      transform: rotate(135deg);
    }

    div:nth-of-type(2) {
      transform: rotate(-135deg);
    }

    div:last-of-type {
      display: none;
    }
  `
      : null}
`;
