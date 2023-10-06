import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal";
import CheckoutProduct from "../CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gps/PBDD/EP/LU_Desktop_EP_Hero_NPA_1500x200_EN.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
