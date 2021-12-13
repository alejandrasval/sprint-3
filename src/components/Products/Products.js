import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToShoppingCart } from "../../redux/actions";

const Products = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {

  const dispatch = useDispatch();

  const handleAdd = () => {
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    }
    dispatch(addToShoppingCart(item))
  }

  return (
    <div className="product">
      <div className="info">
        <Link to={`products/${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={handleAdd} className="btnAdd">
        <i>
          <AiOutlineShoppingCart />
        </i>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Products;
