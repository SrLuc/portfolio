import styled from "styled-components";
import { device } from "../Library/deviceSizes";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

interface ContainerProps {
  children?: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
