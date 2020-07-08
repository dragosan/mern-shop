import React,{useContext,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


import {ProductContext} from '../../context/ProductProvider';
import {GET_PRODUCT,GET_PRODUCT_FAIL,ADD_TO_CART} from '../../context/types'

const ProductDetails = (props) => {
   const [qty,setQty] = useState(1);
    const {product,dispatch,cart} = useContext(ProductContext);
    const id = props.match.params.id;
    
    useEffect(()=>{
      const getProduct = async () =>{
        try {
          const res = await axios.get(`/api/products/${id}`);
          console.log(res)
          dispatch({
            type:GET_PRODUCT,
            payload:res.data
          })
        } catch (err) {
          dispatch({
            type:GET_PRODUCT_FAIL
          })
        }
      }     
     getProduct();
    },[])
    
    const addToCart = (item,qty) =>{
      dispatch({
        type: ADD_TO_CART,
        payload:{...item,qty}
      })
      
    }
    
    
    return product ?  <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt="product" ></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            {product.rating} Stars ({product.numReviews} Reviews)
          </li>
          <li>
            Price: <b>${product.price}</b>
          </li>
          <li>
            Description:
            <div>
              {product.description}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            Price: {product.price}
          </li>
          <li>
            Status: {product.status}
          </li>
          <li>
            Qty: <select value={qty} onChange={(e)=> setQty(e.target.value)} disabled={product.InStock===0}>
              {[...Array(product.InStock).keys()].map(c=> <option key={c+1} value={c+1}>{c+1}</option>)}
            </select>
          </li>
          <li>
  <button className="button primary" onClick={()=>addToCart(product,Number(qty))}>{product.InStock > 0 ? 'Add to Cart' : 'Item Not Availbale'}</button>
          </li>
        </ul>
      </div>
  
    </div>
  
  </div> : <h4>...loading</h4> 
}

export default ProductDetails
