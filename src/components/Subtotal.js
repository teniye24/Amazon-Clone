import React from "react";
import "../components/Subtotal.css";
import { useStateValue } from "./StateProvider";
import {useNavigate} from "react-router-dom"
import CurrncyFormat from "react-currency-format"

function Subtotal() {
  
  const [{ cart}, dispatch] = useStateValue();
  const navigate= useNavigate()
  const getCartTotal = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <CurrncyFormat
        renderText={(value) => (
          <div>
            <p>
              
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
