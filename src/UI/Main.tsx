import styled from "styled-components";

const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 80px;
    }
  }

  article {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    div {
      width: 70%;
      height: 40vh;
      border: 1px solid black;
    }

    aside {
      width: 30%;
      height: 40vh;
      border: 1px solid black;
    }
  }

  footer {
    width: 100%;
    gap: 20px;
    height: 33vh;
    display: flex;
    justify-content: space-around;
    
    div {
        width: 30%;
        border: 1px solid black;
    }

    section {
      width: 80%;
      display: flex;
      

      div {
        width: 50%;
        border: 1px solid black;
      }
    }
  }
`;

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <MainContainer>
      <header>
        <h1>PORTFOLIO</h1>
      </header>
      <article>
        <div></div>
        <aside></aside>
      </article>
      <footer>
        <div></div>
        <section>
          <div></div>
          <div></div>
        </section>
      </footer>
    </MainContainer>
  );
};

export default Main;
