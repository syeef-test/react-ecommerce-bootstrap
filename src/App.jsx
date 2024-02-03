import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function App() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const productsArr2 = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  ];

  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Store</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
            </Nav>
          </Container>
          <Button variant="primary">Cart:0</Button>
        </Navbar>
      </div>
      <div className="bg-light py-4 text-center">
        <h1>The Generics</h1>
      </div>
      <div>
        <Container className="text-center mt-4">
          <h3>MUSIC</h3>
        </Container>

        <Container className="mt-4">
          <Row className="justify-content-center">
            {productsArr.map((album, index) => (
              <Col key={album.title} xs={12} md={6} lg={6}>
                <Card style={{ width: "18rem" }} className="mb-4">
                  <h1>{`Album ${index + 1}`}</h1>
                  <Card.Img variant="top" src={album.imageUrl} />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{`${album.title}`}</Card.Title>
                    <div className="d-flex justify-content-between w-100">
                      <Card.Text>$: {album.price}</Card.Text>
                      <Button variant="info">ADD TO CART</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div>
        <Container className="text-center mt-4">
          <h3>MERCH</h3>
        </Container>

        <Container className="mt-4">
          <Row className="justify-content-center">
            {productsArr2.map((album, index) => (
              <Col key={album.title} xs={12} md={6} lg={6}>
                <Card style={{ width: "18rem" }} className="mb-4">
                  <h1>{`Album ${index + 1}`}</h1>
                  <Card.Img variant="top" src={album.imageUrl} />
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>{`${album.title}`}</Card.Title>
                    <div className="d-flex justify-content-between w-100">
                      <Card.Text>$: {album.price}</Card.Text>
                      <Button variant="info">ADD TO CART</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="secondary">See The Cart</Button>
      </div>
      <footer className="bg-info text-white">
        <div className="d-flex justify-content-around align-items-center">
          <h1>The Generics</h1>
          <div className="d-flex justify-content-around">
            <a href="https://www.youtube.com">
              <img
                src="./img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
                alt="YouTube Logo"
              />
            </a>
            <a href="https://spotify.com">
              <img src="./img/Spotify Logo.png" alt="Spotify Logo" />
            </a>
            <a href="https://facebook.com">
              <img src="./img/Facebook Logo.png" alt="Facebook Logo" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
