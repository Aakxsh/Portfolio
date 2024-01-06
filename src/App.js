// import logo from './logo.svg';
// import Lottie from "lottie-react";
// import Coder from './coder.json';

import './App.css';
import { Header } from './components/Header/Header';
import Hero from './components/UI/Hero';
import Welcome from './components/UI/Welcome';
import Marquee from './components/UI/Marque';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <>
     <Header/>
     <Hero/>
     <Welcome/>
     <Marquee/>
     <Projects/>
     
    </>
  );
}

export default App;
