import { forwardRef } from "react";
import styled, { css } from "styled-components";

import { color, shadow } from "../styles/reuseable/utils.styled";

const Button = forwardRef(
  ({ children, passRef, variant, fullWidth, disabled, ...props }, ref) => {
    return (
      <>
        <ButtonCon
          $variant={variant}
          $fullWidth={fullWidth}
          $disabled={disabled}
          ref={ref}
          {...props}
        >
          {children}
        </ButtonCon>
      </>
    );
  }
);

export default Button;

const ButtonCon = styled.button`
  background: none;
  border: none;
  border-radius: 6px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 12px 22px 12px 22px;
  font-size: 14px;
  font-weight: 500;
  transition: ease-out 0.3s;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  min-height: 40px;
  z-index: 1;
  min-width: 120px;
  margin-bottom: 5px;
  border-radius: 50px;
  transition: ease-in 0.2s;
  box-shadow: ${() => shadow("md")};

  ${({ $variant }) => {
    switch ($variant) {
      case "outline":
        return css`
          background: ${() => color()};
          color: ${() => color("primary", 900)};
          border: 2px solid ${() => color("primary", 900)};

          &:hover,
          &:active {
            background: ${() => color("primary", 900)};
            color: ${() => color()};
          }
        `;
      case "text":
        return css`
          background: ${() => color("secondary", 100)};
          color: ${() => color("primary", 50)};
        `;
      default:
        return css`
          background: ${() => color("primary", 900)};
          color: ${() => color("tertiary", "main")};
        `;
    }
  }}
`;
