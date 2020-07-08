import React,{useContext,useState} from 'react';
import {Link} from 'react-router-dom';

import {ProductContext} from '../../context/ProductProvider';
import {REMOVE_FROM_CART} from '../../context/types';

const Cart = (props) => {
    const [qty,setQty] = useState(1);
    const {cart,dispatch} = useContext(ProductContext);
    console.log(cart)
    

    const removeFromCart = (id) =>{
        dispatch({
            type:REMOVE_FROM_CART,
            payload:id
        })
    }
    return <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          cart.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cart.map(item =>
              <li key={item._id}>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={`/products/${item._id}`}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    Qty:
                  <select value={item.qty} onChange={(e)=> setQty(e.target.value)}>
                      {[...Array(item.qty).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button onClick={()=>removeFromCart(item._id)} type="button" className="button" >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cart.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {cart.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button className="button primary full-width" disabled={cart.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div>
}

export default Cart


