import styled from "styled-components";
import { device } from "../Library/deviceSizes";

const StyledNav = styled.nav`
  width: 5%;
  rotate: 270deg;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    justify-content:space-between;
  }

  li {
    margin-left: 40px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #ff0000;
    }

    @media (max-width: 1324px) {
      font-size: 15px;
    }
  }

  @media ${device.tablet} {
    width: 100%;
    rotate: 0deg;
    padding: 20px;
    display: flex;
    ul {
      justify-content: space-evenly;
      li {
        font-size: 13px;
      }
    }
  }

  @media ${device.mobile} {
    width: 100%;
    rotate: 0deg;
    padding: 10px;
    display: flex;
    ul {
      justify-content: space-around;
      li {
        font-size: 12px;
        margin: 10px;
      }
    }
  }
`;

interface NavProps {}

const Nav = ({}: NavProps) => {
  return (
    <StyledNav>
      <ul>
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>SOUNDCLOUD</li>
        <li>DEVELOPMENT</li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
