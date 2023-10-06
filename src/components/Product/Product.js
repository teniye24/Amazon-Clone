import React from 'react';
import "./Product.css";
import { useStateValue } from '../StateProvider';
function Product({container, id, title, image, price, rating, button}) {
  const [{cart}, dispatch] = useStateValue()
  const addToCart =() =>{
     dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        button:button,
      },
     });
  };


  return (
    <div className="product">
      
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map(() => (
            <p>🌟</p>
          ))}
      </div>
      <img src={image} alt="product" />
     {/* <button className='discount_button'>Up to 30% off</button> */}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product