import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from './paginas/login/cadastroUsuario/CadastroUsuario'
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/cadastrousuario">
            <CadastroUsuario />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
