import styled from "styled-components";

const StyledNav = styled.nav`
  width: 5%;
  rotate: 270deg;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 4rem;
    list-style: none;
    
  }

  li {
    font-size: 20px;
    cursor: pointer;



    @media (max-width: 1324px) {
      font-size: 15px;
    }
  }

  @media (max-width: 900px) {
    display: none;
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
