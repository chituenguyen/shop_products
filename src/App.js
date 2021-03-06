import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/HomeScreen";
import { BrowserRouter as Router,Route } from 'react-router-dom'
import ProductScreen from './Screen/ProductScreen'
import CartScreen from './Screen/CartScreen'
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' component={HomeScreen} exact/> 
          <Route path='/product/:id' component={ProductScreen}/> 
          <Route path='/cart/:id?' component={CartScreen}/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
