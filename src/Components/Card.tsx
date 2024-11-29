import styled from "styled-components";
import Me from "../assets/Me.png";
import NAUR from "../assets/NAUR.png";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35%;
  height: 100vh;
  padding: 10px;

  div {
    img {
      width: 100%;
      object-fit: cover;
    }
  }

  section {
    @media (max-width: 768px) {
      display:flex;
      justify-content: center;
    }
    img {
      width: 60%;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface CardProps {}

const Card = ({}: CardProps) => {
  return (
    <StyledCard>
      <div>
        <img src={Me} alt="Me" />
      </div>
      <section>
        <img src={NAUR} alt="" />
      </section>
      <div>
        <h5>ruanlucenaramos@gmail.com</h5>
        <p>-------------------------------</p>
      </div>
    </StyledCard>
  );
};

export default Card;
