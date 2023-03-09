import styled, { css } from "styled-components";

import { color, device, shadow } from "./utils.styled";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "1240px")};
  padding: 12px 24px;
  margin: auto;
`;

//  Divider

export const Divider = styled.span`
  width: 100%;
  height: 1px;
  display: block;
  background: ${() => color("tertiary", 100)};
`;

// Resizes based on device scrren size, very fluid

export const FluidTitle = styled.h1`
  color: ${() => (color ? color : color("", ""))};
  font-size: 6.8vw;
  font-weight: ${({ $weight }) => ($weight ? $weight : "700")};
  ${() => device.up("sm")} {
    font-size: ${(props) =>
      props.$size
        ? props.$size
        : props.as === "h2"
        ? "24px"
        : props.as === "h3"
        ? "20px"
        : "32px"};
  }
`;

export const Title = styled.h1`
  color: ${({ color }) => (color ? color : "black")};

  ${({ as }) => {
    switch (as) {
      case "h2":
        return css`
          font-size: 40px;
          line-height: 50px;
          font-weight: 700;
          ${() => device.down("sm")} {
            font-size: 36px;
            line-height: 46px;
          }
        `;
      case "h3":
        return css`
          font-size: 32px;
          line-height: 40px;
          font-weight: 700;

          ${() => device.down("sm")} {
            font-size: 28px;
            line-height: 40px;
          }
        `;
      case "h4":
        return css`
          font-size: 24px;
          line-height: 30px;
          font-weight: 500;

          ${() => device.down("sm")} {
            font-size: 22px;
            line-height: 28px;
          }
        `;
      case "h5":
        return css`
          font-size: 20px;
          line-height: 25px;
          font-weight: 500;

          ${() => device.down("sm")} {
            font-size: 18px;
            line-height: 23px;
          }
        `;
      default:
        return css`
          font-size: 48px;
          line-height: 60px;
          ${() => device.down("sm")} {
            font-size: 42px;
            line-height: 56px;
          }
        `;
    }
  }}
`;
