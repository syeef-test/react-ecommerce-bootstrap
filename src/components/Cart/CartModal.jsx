import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import CartContext from "../store/cart-context";
import axios from "axios";

const CartModal = ({ showModal, handleClose }) => {
  const cartContext = useContext(CartContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const email = localStorage.getItem("email");
  //       const sp_removed_email = email.replace(/[@.]/g, "");
  //       const response = await axios.get(
  //         `https://crudcrud.com/api/803fdeac8a604820bc54cbc103679eab/cart${sp_removed_email}`
  //       );

  //       console.log(response.data);
  //       // const mergedCartItems = mergeItems(response.data);
  //       //console.log("mergedData", mergedCartItems);
  //       //setItems(mergedCartItems);
  //     } catch (error) {
  //       console.error("Error fetching cart details:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
