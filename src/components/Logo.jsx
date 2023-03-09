import styled from "styled-components";
import { Link } from "react-router-dom";

import { color } from "@/styles/reuseable/utils.styled";

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">P.</Link>
    </LogoText>
  );
};

export default Logo;

const LogoText = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${() => color("primary", 900)};
`;
