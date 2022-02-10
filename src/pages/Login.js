import React from "react";
import "./styles/Login.css";
import { Container } from "react-bootstrap";
import LoginCard from "../components/LoginCard";
import Swal from "sweetalert2";

class Login extends React.Component {
  state = {
    form: {
      user: "",
      password: "",
    },
    validated: false,
    login: false,
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let user = this.state.form.user;
    let pass = this.state.form.password;

    if (user === "" || pass === "") {
      this.setState({ validated: true });
    } else if (user === "admin" && pass === "123456") {
      this.handleClickLogin();
    } else {
      Swal.fire({
        icon: "error",
        title: "Unregistered user",
        text: "Check that the data is correct!",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      });
    }
  };

  handleClickLogin = () => {
    let user = {
      auth: true,
    };
    localStorage.setItem("loggedIn", JSON.stringify(user));
    window.location.href = "/main";
  };

  render() {
    return (
      <div>
        <div className="img-login">
          <img
            src="https://snowsoftwaresolutions.com/img/snow-negro.png"
            width="250"
            height="85.73"
            className="d-line-block align-top"
            alt="SnowImage"
          />
        </div>

        <Container
          className="col-md-4 main-size"
          style={{
            position: "absolute",
            left: "50%",
            top: "47.5%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoginCard
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            form={this.state.form}
            validated={this.state.validated}
          />
        </Container>
      </div>
    );
  }
}

export default Login;
