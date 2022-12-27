import logo from "./logo.svg";
import "./App.css";
import { Contacto } from "./components/componenteA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Contacto />
        </div>
      </header>
    </div>
  );
}

export default App;
