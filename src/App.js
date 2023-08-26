import './App.css'; 
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './compnent/header/head';  
// import logopic from './image/favicon.ico.png'
import Home from './compnent/home/home'
import About from './compnent/about/about';
import Project  from './compnent/project/project';
import Contact from './compnent/contact/contact';

 

function App() {
  return ( 
    <div>


      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
