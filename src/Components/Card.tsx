import styled from "styled-components";
import Me from "../assets/Me.png";
import NAUR from "../assets/NAUR.png";
import { device } from "../Library/deviceSizes";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 35%;
  height: 90%;
  padding: 15px;
  background-color: #F2F1E9;

  border-radius: 20px;
  
  div {
    text-align: left;
    img {
      width: 100%;
    }
  }

  span {
    img {
      width: 40%;
    }
  }

  @media ${device.tablet} {
    order: -1;
    width: 100%;
    div {
      text-align: center;
    }
    img {
      width: 100%;
    }

    span {
      text-align: center;
      img {
        width: 40%;
      }
    }
  }

  @media ${device.mobile} {
    order: -1;

    width: 100%;
    div {
      text-align: center;
    }
    img {
      width: 100%;
    }
    span {
      text-align: center;
      img {
        width: 40%;
      }
    }
  }
`;

interface CardProps {}

const Card = ({}: CardProps) => {
  return (
    <StyledCard>
      <div>
        <img src={Me} alt="Me" />
      </div>
      <span>
        <img src={NAUR} alt="NAUR" />
      </span>
      <div>
        <p>I'm a software engineer</p>
        <p>I'm Designer and Photographer as well</p>
        <p>Contanct Me on ruanlucenaramos@gmail.com</p>
      </div>
    </StyledCard>
  );
};

export default Card;
