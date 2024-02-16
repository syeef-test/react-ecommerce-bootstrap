import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";

const Product = ({ products }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (newItem) => {
    // console.log(newItem);
    cartContext.addItem(newItem, 1);
  };

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
