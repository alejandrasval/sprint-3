import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { removeFromShoppingCart } from "../../redux/actions"
import { BsFillTrashFill } from "react-icons/bs"

const CheckoutProduct = ({ id, title, image, price }) => {
  let dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromShoppingCart(id));
  };

  return (
    <div className="checkout-product">
      <img src={image} className="checkout-product-image" alt="" />
      <div className="checkout-product-info">
        <h3 className="checkout-product-title">{title}</h3>
        <p className="checkout-product-price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
      </div>
      <button className="btnDelete" onClick={handleRemove}>
        <i>
          <BsFillTrashFill />
        </i>
        Eliminar del carrito
      </button>
    </div>
  );
};

export default CheckoutProduct;
