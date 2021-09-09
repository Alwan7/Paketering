import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './component/Footer';
import HomePage from './pages/HomePage.jsx'
import Header from "./component/Header"
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  
  return (
    <Router>
    <Header />
      <main className="py-3">
        <Container>

          < Route path='/' exact component={HomePage}/>
          < Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
