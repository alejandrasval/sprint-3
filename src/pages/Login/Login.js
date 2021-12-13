import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { logInInitiate } from "../../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);
  
  let dispatch = useDispatch();
  let navigate = useNavigate();
  
  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user, navigate])
  
  
  const signIn = (e) => {
    e.preventDefault();
    dispatch(logInInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639332586/Amazonas/Amazon_Logo_v80jqk.png"
          alt="amazon-logo"
          className="login-logo"
        />
      </Link>
      <div className="login-container">
        <h1>Inicia sesión</h1>
        <form>
          <label>Correo electrónico</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login-signup">
            Continuar
          </button>
        </form>
        <p>
          Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad
          de Amazon.
        </p>
      </div>
      <p>¿Eres nuevo en Amazon?</p>
      <Link to="/signup">
        <button>Crea tu cuenta de Amazon</button>
      </Link>
    </div>
  );
};

export default Login;
