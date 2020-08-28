import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./component.css";

const Item = (props) => {
  return (
    <Card className={"classes.card"} border="light">
      <Card.Body className={"classes.body"}>
        <Card.Title className="item-title">{props.title}</Card.Title>
        <Card.Subtitle className="item-subtitle">
          {props.weight} lb
        </Card.Subtitle>
        <div className="button-container">
          <Button variant="outline-warning">Edit</Button>
          <Button variant="outline-danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
