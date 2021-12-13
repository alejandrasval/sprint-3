import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal"
import "./Checkout.css";

const Checkout = () => {
  const { shoppingCart, user } = useSelector((state) => state.data);

  return (
    <div className="checkout">
      <div className="checkout-left">
        <h3>Hola {user?.email}!</h3>
        <h2 className="checkout-title">
          {shoppingCart.length === 0
            ? "Tu carrito de compras está vacío"
            : "Tu carrito de compras"}
        </h2>
        {shoppingCart &&
          shoppingCart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
