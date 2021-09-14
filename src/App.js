import { Container } from 'react-bootstrap'
import React, { useContext } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './component/Footer';
import HomePage from './pages/HomePage.jsx'
import Header from "./component/Header"
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import GlobalState from "./context/GlobalState";


function App() {
  
  return (
    <GlobalState>
    <Router>
    
      <main className="py-3">
        <Container>

          < Route path='/' exact component={HomePage}/>
          < Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Container>
        
      </main>
      <Footer />
      </Router>
      </GlobalState>
  );
}

export default App;
