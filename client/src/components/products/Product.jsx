import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
    const {_id,name,image,price,rating,brand,numReviews} = product;
    return (
        <li>
      <div className="product">
          <Link to={`/products/${product._id}`}>
        <img className="product-image" src={image} alt={name} />
        </Link>
        <div className="product-name">
          <a href="product.html">{name}</a>
        </div>
        <div className="product-brand">{brand}</div>
        <div className="product-price">${price}</div>
        <div className="product-rating">{rating} Stars ({numReviews} Reviews)</div>
      </div>
    </li>
    )
}

export default Product
