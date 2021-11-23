import logo from './logo.svg';
import './App.css';
import Page404 from './pages/404';
import Header from './pages/header';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Page404 />
        <Footer />
      </header>
    </div>
  );
}

export default App;
