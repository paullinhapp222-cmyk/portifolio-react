import "./App.css";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";

function App() {
  return (
    <div>
      <header>
        <h1>Ana Paula</h1>

        <nav>
          <a href="https://google.com">Sobre mim</a>
          <a href="https://google.com">Projetos</a>
        </nav>
      </header>

      <Sobre />
      <Projetos />
    </div>
  );
}

export default App;
