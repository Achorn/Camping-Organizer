import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./component.css";

const NewItem = (props) => {
  const [name, setName] = useState("Backpack");
  const [weight, setWeight] = useState("9.5");

  return (
    <Card className={"classes.card"} border="light">
      <Card.Body className={"classes.body"}>
        <Form onSubmit={props.addItem}>
          <Form.Group className="mb-3" controlId="validateItem01">
            <Form.Control
              required
              type="text"
              placeholder="Item Name"
              defaultValue={name}
              //   value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="validateItem01">
            <Form.Control
              required
              type="text"
              placeholder="Weight"
              defaultValue={weight}
              //   value={name}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Group>
          {/* <Button type="submit">Submit form</Button> */}
        </Form>

        <Button
          onClick={() => props.addItem(name, weight)}
          variant="outline-warning"
        >
          Add Item
        </Button>
        {/* /* </div> */}
      </Card.Body>
    </Card>
  );
};
export default NewItem;
