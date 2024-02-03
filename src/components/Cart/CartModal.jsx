import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const CartModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Cart Items Are:</p>
        {cartElements.map((item, index) => (
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
