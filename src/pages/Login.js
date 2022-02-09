import React from "react";
import "./styles/pages.css";
import { Form, Button, Card, Container } from "react-bootstrap";

class Login extends React.Component {
  componentDidMount() {
    document.getElementById("topnavbar").hidden = true;
  }

  state = {};

  handleClickLogin = () => {
    window.location.href = '/main';
  };

  render() {
    return (
      <Container
        className="col-md-3 main-size"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card>
          <Card.Body>
            <h1>Login</h1>

            <Form style={{ textAlign: "left" }}>
              <Form.Group className="mb-3" controlId="formUser">
                <Form.Label>User</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
            <div className="d-grid gap-2">
              <Button onClick={this.handleClickLogin} varian="primary">
                Sign In
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Login;
