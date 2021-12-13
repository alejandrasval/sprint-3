import React from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { products } from "../../data/ProductsData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToShoppingCart } from "../../redux/actions";
import "./DetailProduct.css";
import Comments from "../Comments/Comments";
import ReactImageMagnify from 'react-image-magnify';

const DetailProduct = () => {
  let { id } = useParams();
  let product = products.find((item) => item.id === id);
  let dispatch = useDispatch();

  const handleAdd = () => {
    const item = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      rating: product.rating,
      specification: product.specification,
      detail: product.detail,
    };
    dispatch(addToShoppingCart(item));
  };

  return (
    <>
      <Header />
      <div className="detail-product-container">
        <div className="detail-product">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.title,
                isFluidWidth: true,
                src: product.image,
              },
              largeImage: {
                src: product.image,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className="detail-product-info">
          <h3 className="detail-product-title">{product.title}</h3>
          <span className="detail-product-rating">
            {Array(product.rating)
              .fill()
              .map((_, index) => (
                <p key={index}>⭐</p>
              ))}
          </span>
          <p className="detail-product-price">
            Precio: <strong>$ {product.price}</strong>
          </p>
          <div className="detail-product-specification">
            <h4>Especificaciones:</h4>
            {product.specification &&
              product.specification.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </div>
          <div className="detail-product-description">
            <h4>Descripción del producto:</h4>
            <p>{product.detail}</p>
          </div>
          <button onClick={handleAdd} className="btnAdd">
            <i>
              <AiOutlineShoppingCart />
            </i>
            Añadir al carrito
          </button>
        </div>
      </div>
      <h2>Opiniones de clientes</h2>
      <Comments />
    </>
  );
};

export default DetailProduct;
