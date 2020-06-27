import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.scss';
import Header from './components/layout/Header';
import ProductsList from './components/products/ProductsList';
import Footer from './components/layout/Footer';
import Contact from './components/layout/Contact';
import ProductDetails from './components/products/ProductDetails';

function App() {
 
  
  return (
    <Router>
    <div className="grid-container">
      <Header />
      
      <main className="main">
        <div className="content">          
           <Route exact path="/" component={ProductsList} />
           <Route exact path="/products/:id" component={ProductDetails} />
         
        </div>  
      </main>
      <Contact />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
