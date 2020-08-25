import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";

const PageLayout = (props) => {
  return (
    <Container className="page-container">
      <Row className="row">
        <Col className="col-one" xs={4}>
          Title
          <br /> new Item
        </Col>
        <Col className="list-container">List</Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
