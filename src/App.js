import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>👋 Siemaneczko 👋</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⛔Zakaz wstępu/No Entry⛔
        </a>
      </header>
    </div>
  );
}

export default App;
