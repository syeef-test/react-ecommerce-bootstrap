import React, { useContext, useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import CartContext from "../store/cart-context";

const CartModal = ({ showModal, handleClose }) => {
  const cartContext = useContext(CartContext);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cart Items Are:</p>
        {cartContext.items.map((item, index) => (
          <Card key={index} className="mb-3">
            <Card.Img
              src={item.imageUrl}
              alt={item.title}
              style={{ maxWidth: "100%", maxHeight: "100px" }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </Card.Body>
            <Button variant="danger">Remove</Button>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
