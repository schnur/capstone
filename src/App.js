import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import BookPage from './components/BookPage';

function App() {
  return (
    //<div className="App">
    <>
      <BrowserRouter>
        <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Header></Header>
      <Nav></Nav>
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
      </header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
