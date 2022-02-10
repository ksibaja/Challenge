import React from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";

class LoginCard extends React.Component {
  render() {
    const { onChange, onSubmit, form, validated } = this.props;

    const password_show_hide = () => {
      var x = document.getElementById("password");
      var show_eye = document.getElementById("show_eye");
      var hide_eye = document.getElementById("hide_eye");
      hide_eye.classList.remove("d-none");
      if (x.type === "password") {
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
      } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
      }
    };

    return (
      <Card style={{ borderStyle: "dashed", }}>
        <Card.Body>
          <h1>Login</h1>
          <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}
            style={{ textAlign: "left" }}
          >
            <Form.Group>
              <Form.Control.Feedback type="invalid">
                Please provide a user.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>User</Form.Label>
              <Form.Control
                required
                name="user"
                onChange={onChange}
                value={form.user}
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a user.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  id="password"
                  required
                  name="password"
                  onChange={onChange}
                  value={form.password}
                  type="password"
                />
                <InputGroup.Text
                  style={{
                    borderTopRightRadius: "10%",
                    borderBottomRightRadius: "10%",
                  }}
                >
                  <span onClick={password_show_hide}>
                    <i className="fas fa-eye" id="show_eye"></i>
                    <i className="fas fa-eye-slash d-none" id="hide_eye"></i>
                  </span>
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Please provide a password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className="d-grid gap-2 mt-4 mb-3">
              <Button type="submit" variant="dark">
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default LoginCard;
