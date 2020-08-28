import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./component.css";

const Item = (props) => {
  return (
    <Card className={"classes.card"} border="light">
      <Card.Body className={"classes.body"}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.weight} Lb</Card.Subtitle>
        <Button variant="outline-warning">Edit</Button>
        <Button variant="outline-danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
