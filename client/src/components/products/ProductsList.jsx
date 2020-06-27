import React,{Fragment} from 'react'

import data from '../../context/data';
import Product from './Product';

const ProductsList = () => {
  const {products} = data;
  console.log(products);
    return (
      <ul className="products">
        {products.map(product => <Product key={product._id} product={product} /> )}
        
      </ul>
      
    )
}

export default ProductsList
