import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './component/Footer';

import Header from "./component/Header"

function App() {
  return (
    <Router>
    <Header />
      <main className="py-3">
        <Container>


        </Container>
     
      </main>
      <Footer />
    </Router>
  );
}

export default App;
