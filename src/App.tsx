import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Footer from "./components/estaticos/footer/Footer";
import {Grid} from "@material-ui/core";
import Home from './paginas/home/Home';


function App() {
  return (
  <>
    <Navbar />
    <Home />
    <Footer />
  </>
  );
}

export default App;
