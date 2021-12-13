import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import DetailProduct from "./components/DetailProduct/DetailProduct";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./redux/actions";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //código en caso de que haya sesión iniciada
        dispatch(setUser(authUser));
      } else {
        //código en caso de que no haya sesión iniciada
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="/header" element={<Header />} />
        </Route>
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
