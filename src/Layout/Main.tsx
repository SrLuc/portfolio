import * as S from "./css/MainStyle";
import star from "../assets/star.png";
import soundcloud from "../assets/soundcloud.png";
import linkedin from "../assets/linkedin.png";
import chat from "../assets/chat.png";

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
        <article>
          <img src={soundcloud} alt="" />
        </article>
        <section>
          <nav>
            <img src={linkedin} alt="" />
          </nav>
          <form>
            <img src={chat} alt="" />
          </form>
        </section>
      </main>
    </S.MainContainer>
  );
};

export default Main;
