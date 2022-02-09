import React from "react";
import Card from "react-bootstrap/Card";
import "./styles/CardValue.css";

const CardValue = ({ title, description, image }) => (
  <div className="Card">
    <Card className="c-color">
        <div className="test">
            <br></br>
            <div>
                O
            </div>
            <br></br>
        </div>
      <Card.Body className="card-style">
        <h5>{title}</h5>
        <p className="p">{description}</p>         
      </Card.Body>
    </Card>
    <br></br>
  </div>
);
// <img className="img" src={image} alt="hello"></img>

export default CardValue;
