import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './component/Footer';
import HomePage from './pages/HomePage.jsx'
import Header from "./component/Header"

function App() {
  return (
    <Router>
    <Header />
      <main className="py-3">
        <Container>

        < HomePage />
        </Container>
     
      </main>
      <Footer />
    </Router>
  );
}

export default App;
