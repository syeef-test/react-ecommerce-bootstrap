import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from "react-bootstrap";
import CartModal from "./components/Cart/CartModal";
import Footer from "./components/Footer/Footer";
import MyNavbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

import CartProvider from "./components/store/CartProvider";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import Contact_us from "./components/pages/Contact_us";
import ErrorPage from "./components/pages/Error";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Signin from "./components/pages/Signin";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Header />
        <CartProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/store" component={Store} />
            <Route path="/contact_us" component={Contact_us} />
            <Route exact path="/products" component={Product} />
            <Route path="/products/:productId" component={ProductDetail} />
            <Route path="" component={Signin} />
            <Route component={ErrorPage} />
          </Switch>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
