import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feature from './components/Feature';
import About from './components/About';
import Price from './components/Price';
import Services from './components/Services';
import Home from './components/Home';
import Footer from './components/Footer';
import Sign from './components/Sign';
import SignUp from './components/SignUp';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Price />
      <Services />
    </div>
  )
}

export default App;
