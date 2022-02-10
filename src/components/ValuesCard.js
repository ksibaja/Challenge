import React from "react";
import Card from "react-bootstrap/Card";
import "./styles/ValuesCard.css";

const ValuesCard = ({ title, description, image }) => (
  <div style={{ textAlign: "center" }}>
    <Card className="c-color">
      <div className="icon">
        <img
          className="img"
          src={image}
          width="55"
          alt="icon"
        />
      </div>
      <Card.Body className="card-style ">
        <h4>{title}</h4>
        <p>{description}</p>
      </Card.Body>
    </Card>
    <br></br>
  </div>
);

export default ValuesCard;
