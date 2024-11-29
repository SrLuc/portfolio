import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
  width: 35%;
  height: 100vh;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface CardProps {}

const Card = ({}: CardProps) => {
  return (
    <StyledCard>
      <div>
        imagem
        <img src="" alt="" />
      </div>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odio
        placeat architecto quasi eligendi! Doloribus velit dicta quisquam
        ducimus quas culpa aperiam asperiores tempore ea! Cupiditate ab minima
        recusandae voluptatum.
      </p>
    </StyledCard>
  );
};

export default Card;
