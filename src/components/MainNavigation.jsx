import React, { useContext } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto mx-auto">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
              exact
            >
              Home
            </NavLink>
            <NavLink
              to="/store"
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
            >
              Store
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
            >
              About
            </NavLink>
          </Nav>
        </Container>

        <Button variant="outline-light">Cart:0</Button>
      </Navbar>
      <Container>
        <h3>The Generics</h3>
      </Container>
    </>
  );
}

export default MainNavigation;
