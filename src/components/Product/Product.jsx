import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Product = ({ products }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (newItem) => {
    // console.log(newItem);
    cartContext.addItem(newItem, 1);
  };

  return (
    <Container className="mt-4 text-center">
      <Row className="justify-content-center">
        {products.map((album, index) => (
          <Col key={album.title} xs={12} md={6} lg={6}>
            <Card style={{ width: "18rem" }} className="mb-4">
              <h1>{`Album ${index + 1}`}</h1>
              <Card.Img variant="top" src={album.imageUrl} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{`${album.title}`}</Card.Title>
                <div className="d-flex justify-content-between w-100">
                  <Card.Text>$: {album.price}</Card.Text>
                  <Button
                    variant="info"
                    onClick={() => addToCartHandler(album)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
