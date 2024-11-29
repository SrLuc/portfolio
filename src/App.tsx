import Container from "./Layout/Container";
import Nav from "./Components/Nav";
import Main from "./Layout/Main";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Container>
        <Nav />
        <Card />
        <Main />
      </Container>
    </>
  );
}

export default App;
