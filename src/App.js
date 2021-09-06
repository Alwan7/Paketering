import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./component/Header"

function App() {
  return (
    <Router>
    <Header />
    <div className="App">
     <h1>welcome to my shop</h1>
    </div>
    </Router>
  );
}

export default App;
