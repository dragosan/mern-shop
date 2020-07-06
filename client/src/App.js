import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.scss';
import Header from './components/layout/Header';
import ProductsList from './components/products/ProductsList';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import Cart from './components/cart/Cart';
import ProductDetails from './components/products/ProductDetails';
import ProductProvider from './context/ProductProvider';

function App() {
 
  
  return (
    
    <Router>
    <div className="grid-container">
      <ProductProvider>
      <Header />
      
      <main className="main">
        <div className="content">
          <Switch>          
           <Route exact path="/" component={ProductsList} />
           <Route exact path="/cart" component={Cart} />
           <Route exact path="/:id" component={ProductDetails} />
           
           </Switch>
        </div>  
      </main>
      <Contact />
     <Footer />
     </ProductProvider>
    </div>
    </Router>
  );
}

export default App;
