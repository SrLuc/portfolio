import styled from "styled-components";
  
const MainContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 75px;
    }
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 30px;
    margin-bottom: 20px;

    div {
      width: 70%;
      height: 40vh;
      border: 1px solid black;
      border-radius: 30px;
    }

    aside {
      width: 25%;
      height: 40vh;

      span {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        border: 1px solid black;
        border-radius: 30px 30px 0 0;
      }

      div {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        border: 1px solid black;
        border-radius: 0 0 30px 30px;
      }
    }
  }

  footer {
    width: 100%;
    gap: 50px;
    height: 33vh;
    display: flex;
    justify-content: space-around;

    span {
      width: 30%;
      border: 1px solid black;
      border-radius: 30px;
    }

    section {
      width: 65%;
      display: flex;

      div {
        width: 55%;
        border: 1px solid black;
        border-radius: 30px 0 0 30px;
      }

      form {
        width: 50%;
        border: 1px solid black;
        border-radius: 30px 30px 30px 0;
        margin-left: -30px; /* Remove a lacuna entre a borda da div e do form */
        background-color: white;
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
        <div>images</div>
        <aside>
          <span>1</span>
          <div>2</div>
        </aside>
      </article>
      <footer>
        <span>soundcloud</span>
        <section>
          <div>linkedin</div>
          <form>form modal</form>
        </section>
      </footer>
    </MainContainer>
  );
};

export default Main;
