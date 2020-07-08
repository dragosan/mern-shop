import React,{createContext,useReducer} from 'react';

import {GET_PRODUCTS, GET_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART,
     GET_PRODUCTS_FAIL, GET_PRODUCT_FAIL} from './types'

export const ProductContext = createContext();

const ProductProvider = (props) => {
    let products = null;
    const initState = {
        products:[],
        loading:true,
        product:null,
        errors:[],
        cart: localStorage.getItem('cart') ? localStorage.getItem('cart') : []
    }
      
   

    const appReducer = (state,action) =>{
        const {type,payload} = action;
        switch(type){
            case GET_PRODUCTS:                
                return {...state,loading:false,products:payload}
            case GET_PRODUCTS_FAIL:
            case GET_PRODUCT_FAIL:
                return {...state,errors:[...state.errors,payload]}
            case GET_PRODUCT:
                return {...state,product:payload}
            case ADD_TO_CART:
                localStorage.setItem('cart',state.cart)
                return {...state,cart:[...state.cart,payload]}
            case REMOVE_FROM_CART:
                return {...state,cart:[...state.cart.filter(item=>item._id!==payload)]}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(appReducer, initState);
    return (
        <ProductContext.Provider value={{...state,dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
