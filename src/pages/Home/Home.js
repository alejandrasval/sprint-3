import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import { products, headerItems } from "../../data/ProductsData";
import Slider from "../../components/Slider/Slider";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const bannerImages = [
    "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639367291/Amazonas/banner2_ffj6ys.jpg",
    "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639367291/Amazonas/banner3_hqfrnr.jpg",
    "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639367291/Amazonas/banner1_rdzocp.jpg",
    "https://res.cloudinary.com/dtkdsolsz/image/upload/v1639367291/Amazonas/banner1_fihdbf.png",
  ];
  return (
    <div>
      <Header />
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <li>{item}</li>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages} />
          <div className="home-row">
            {products.slice(0, 1).map((item) => (
              <Products
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <h2>Productos relacionados con este artículo</h2>
          <div className="home-row">
            {products.slice(1, 5).map((item) => (
              <Products
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
          <h2>Inspirado por tu historial de búsqueda</h2>
          <div className="home-row">
            {products.slice(5, 9).map((item) => (
              <Products
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
                specification={item.specification}
                detail={item.detail}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
