import React from "react";
import { Navbar } from "react-bootstrap";
import "./styles/Topnavbar.css";
//import { LinkContainer } from "react-router-bootstrap";

class Topnavbar extends React.Component {
  state = {};

  render() {
    return (
      <Navbar id="topnavbar"
        className="nav-padding"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand href="/main">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/login">Sign out</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topnavbar;
