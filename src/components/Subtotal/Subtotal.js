import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getShoppingCartTotal } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const { shoppingCart, user } = useSelector((state) => state.data);
  const navigate = useNavigate();

  const handleCheckout = () => {
      if(user){
          navigate("/payment")
      } else {
          navigate("/login")
      }
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({shoppingCart.length} items) : <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getShoppingCartTotal(shoppingCart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceder al pago</button>
    </div>
  );
};

export default Subtotal;
