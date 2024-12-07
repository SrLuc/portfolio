import * as S from "./css/MainStyle";
import star from "../assets/star.png";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <S.MainContainer>
      <header>
        <i>
          <img src={star} alt="" />
        </i>
        <h1>PORTFOLIO</h1>
        <i>
          <img src={star} alt="" />
        </i>
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
    </S.MainContainer>
  );
};

export default Main;
