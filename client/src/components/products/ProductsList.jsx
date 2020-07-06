import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios';

import Product from './Product';
import {ProductContext} from '../../context/ProductProvider';
import {GET_PRODUCTS,GET_PRODUCTS_FAIL} from '../../context/types';
import Spinner from '../layout/Spinner';

const ProductsList = () => {
 const {products,loading,errors,dispatch} = useContext(ProductContext);
  
  
  useEffect(()=>{
    const getProducts = async () =>{
      try {
        const res = await axios.get('/api/products');
        dispatch({
          type:GET_PRODUCTS,
          payload:res.data
        })
      } catch (err) {
        dispatch({
          type:GET_PRODUCTS_FAIL,
          payload:err.message
        })
      }
     
      
    }
    getProducts();
    
  },[])
  
  
  
    return (
      <ul className="products">
        {errors.length > 0 ? errors.map(error=> <h2>{error}</h2>) :
        loading ? <Spinner /> :
         products !==undefined && products.map(product => <Product key={product._id} product={product} /> )}
        
        
      </ul>
      
    )
}

export default ProductsList
