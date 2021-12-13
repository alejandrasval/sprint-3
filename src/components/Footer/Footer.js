import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <h1>Conócenos</h1>
          <ul>
            <li>Trabajar en Amazon</li>
            <li>Información corporativa</li>
            <li>Departamento de prensa</li>
          </ul>
        </div>
        <div>
          <h1>Gana dinero con nosotros</h1>
          <ul>
            <li>Vender en Amazon</li>
            <li>Vender en Amazon Handmade</li>
            <li>Publica tu libro en Kindle</li>
            <li>Programa de afiliados</li>
            <li>Anuncia tus productos</li>
          </ul>
        </div>
        <div>
          <h1>Podemos ayudarte</h1>
          <ul>
            <li>Amazon y Covid-19</li>
            <li>Devolver o reemplazar productos</li>
            <li>Gestionar contenido y dispositivos</li>
            <li>Ayuda</li>
          </ul>
        </div>
        <div>
          <h1>Métodos de pago</h1>
          <ul>
            <li>Tarjetas de crédito y débito</li>
            <li>Tarjetas de regalo</li>
            <li>Meses sin intereses</li>
            <li>Amazon cash</li>
            <li>Amazon recargable</li>
          </ul>
        </div>
      </div>
      <div className="footer-logo">
        <img
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639342612/Amazonas/logo_qkpjoe.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
