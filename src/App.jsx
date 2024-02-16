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

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

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
            <Route
              exact
              path="/products"
              render={(props) => <Product {...props} products={productsArr} />}
            />
            <Route path="/products/:productId" component={ProductDetail} />

            <Route component={ErrorPage} />
          </Switch>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
