import styled from "styled-components";
import Me from "../assets/Me.png";
import NAUR from "../assets/NAUR.png";
import { device } from "../Library/deviceSizes";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 50%;
  height: 90%;
  padding: 15px;
  //  background-color: #F2F1E9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  border-radius: 50px 50px 0 0;

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

  p {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0.5rem 0;
    color: #333;

    a {
      color: #333;
      text-decoration: none;
      font-weight: 700;
    }
  }

  @media ${device.tablet} {
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
        <p>Software Engineer</p>
        <p>I'm Designer and Photographer as well</p>
        <p>
          Contact me on
          <a href=""> ruanlucenaramos@gmail.com</a>
        </p>
      </div>
    </StyledCard>
  );
};

export default Card;
