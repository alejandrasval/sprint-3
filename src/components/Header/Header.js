import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOutInitiate } from "../../redux/actions"

const Header = () => {
  const { user, shoppingCart } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  const handleAuth = () => {
    if(user) {
      dispatch(logOutInitiate());
    }

  }
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639342612/Amazonas/logo_qkpjoe.png"
            alt="amazon-logo"
          />
        </Link>
        <div className="header-option" style={{ marginRight: "-10px" }}>
          <GoLocation className="locationIcon" />
        </div>
        <div className="header-option">
          <span className="header-option1">Hola</span>
          <span className="header-option2">Elige tu dirección</span>
        </div>
        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="Busca tu producto"
          />
          <AiOutlineSearch className="searchIcon" />
        </div>
        <div className="header-nav">
          <Link to={`${user ? "/" : "/login"}`} className="header-link">
            <div onClick={handleAuth} className="header-option">
              <span className="header-option1">
                Hola{user ? ", " + user.email : null}
              </span>
              <span className="header-option2">{user ? "Cierra sesión" : "Identifícate"}</span>
            </div>
          </Link>
          <Link to="/orders" className="header-link">
            <div className="header-option">
              <span className="header-option1">Devoluciones</span>
              <span className="header-option2">y pedidos</span>
            </div>
          </Link>
          <Link to="/checkout" className="header-link">
            <div className="header-basket">
              <AiOutlineShoppingCart className="shoppingCartIcon" />
              <span className="header-option2 basket-count">{shoppingCart && shoppingCart.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
