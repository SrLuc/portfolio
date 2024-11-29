import styled from "styled-components";
import { device } from "../Library/deviceSizes";

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;

  header {
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.desktop} {
      font-size: 60px;
    }

    @media ${device.tablet} {
      font-size: 40px;
    }

    @media ${device.mobile} {
      font-size: 35px;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    div {
      background-color: pink;
      width: 70%;
      height: 250px;

      @media ${device.tablet} {
        width: 100%;
      }
    }

    aside {
      display: flex;
      flex-direction: column;
      width: 30%;

      span {
        background-color: blue;
        height: 50%;
      }
    }

    article {
      background-color: yellow;
      width: 25%;
      height: 250px;
    }

    section {
      width: 75%;
      display: flex;
      height: 250px;

      nav {
        width: 50%;
        background-color: green;
      }
      form {
        width: 50%;
        background-color: orange;
      }
    }
  }

  @media ${device.tablet} {
    width: 100%;

    main {
      //pictures
      div {
        width: 100%;
      }

      //gituhub
      aside {
        width: 40%;
        order: 3;
      }

      //soundcloud
      article {
        width: 60%;
        order: 2;
      }

      //linkedin
      section {
        width: 100%;
        order: 4;
      }
    }
  }

  @media ${device.mobile} {
    width: 100%;

    main {
      //pictures
      div {
        width: 100%;
      }

      //gituhub
      aside {
        width: 40%;
        order: 3;
      }

      //soundcloud
      article {
        width: 60%;
        order: 2;
      }

      //linkedin
      section {
        width: 100%;
        order: 4;
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
      <main>
        <div>images</div>
        <aside>
          <span>1</span>
          <span>2</span>
        </aside>
        <article>soundcloud</article>
        <section>
          <nav>linkedin</nav>
          <form>form modal</form>
        </section>
      </main>
    </MainContainer>
  );
};

export default Main;
