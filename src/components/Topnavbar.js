import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./styles/Topnavbar.css";

class Topnavbar extends React.Component {
  state = {};

  handleClick = () => {
    let user = {
      auth: false,
    };
    localStorage.setItem("loggedIn", JSON.stringify(user));
    window.location.href = "/login";
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/main">
            <img
              src="https://snowsoftwaresolutions.com/img/snow-negro.png"
              width="150"
              height="49.73"
              className="d-line-block align-top"
              alt="SnowImage"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="login" onClick={this.handleClick}>Sign out</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Topnavbar;
