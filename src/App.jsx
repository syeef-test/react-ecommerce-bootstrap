import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CartModal from "./components/Cart/CartModal";
import Footer from "./components/Footer/Footer";
import MyNavbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import CartProvider from "./components/store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Store from "./components/pages/Store";
import RootLayout from "./components/pages/Root";
import ErrorPage from "./components/pages/Error";

// const productsArr = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 1,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 1,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
//   {
//     title: "Blue Color",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//     quantity: 1,
//   },
// ];

// const productsArr2 = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 1,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 1,
//   },
// ];

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/store", element: <Store /> },
    ],
  },
]);

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <RouterProvider router={router}>
        <CartProvider>
          {/* <MyNavbar handleShow={handleShow} /> */}
          {/* <Header /> */}

          {/* <Product products={productsArr} />
        <Product products={productsArr2} /> */}

          {/* <div className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleShow}>
            See The Cart
          </Button>
        </div>
        <CartModal showModal={showModal} handleClose={handleClose} /> */}
          {/* <Footer /> */}
        </CartProvider>
      </RouterProvider>
    </>
  );
}

export default App;
