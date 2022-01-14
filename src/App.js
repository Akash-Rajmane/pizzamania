import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Home/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
