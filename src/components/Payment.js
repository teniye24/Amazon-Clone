import React, { useEffect, useState } from 'react'
import "./Payment.css"
import CheckoutProduct from './CheckProduct'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'
import axios from '../axios'
import { db } from './Firebase'

function Payment() {
    const [{cart, user}, dispatch] = useStateValue();
    const Navigate = useNavigate();
    const getCartTotal = (cart) =>
      cart?.reduce((amount, item) => item.price + amount, 0);
    const stripe = useStripe();
    const elements =useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState('');
    
    const [clientSecret, setClientSecret]= useState(true);
    
    useEffect(() =>{
      const getClientSecret = async () =>{
        const response = await axios({
          method : 'post',
          url:`/payments/create?total=${getCartTotal(cart) * 100}`,

        })
        setClientSecret(response.data.clientSecret);
      }
      getClientSecret();
    }, [cart])
        console.log('The secreat is >>>', clientSecret);
    const handleSubmit = async (event) =>{
      event.preventDefault();
     setProcessing(true)
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
          card:elements.getElement(CardElement),
        },
      }) .then(({paymentIntent}) =>{
       db.collection('user')
       .doc(user?.uid)
       .collection('orders')
       .doc(paymentIntent.id)
       .set({
        cart:cart,
        amount:paymentIntent.amount,
        created:paymentIntent.created
       })
        setSucceded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: 'EMPTY_CART'
        })
      })
      Navigate('/order')

     }
     




    const handleChange = (event)=>{
      setDisabled(event.empty);
      setError(event.error ? event.error.message: '')
    }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length}items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item) => {
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />;
            })}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                 renderText={(value) => <h3>Order Total:{value}</h3>}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />
                <button disabled = {processing || disabled || succeded}>
                  <span>{processing ? <p>Proccessing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment


 //Stripe API key.....pk_test_51NukRBB87da2k8vS8bUbzFQTJZWrNYqRJClqwRqEQqLmZNGFu02TGBOoUxeK5zVHw9OXfc8LSomLexbJ28qZBS9O00Km8s2Fmo