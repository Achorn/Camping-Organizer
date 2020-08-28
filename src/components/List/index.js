import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";
import Item from "../Item";

class CampingList extends Component {
  render() {
    return (
      // <Container className={"classes.list-container"}>
      //   <Item title={"backpack"} weight={16} />
      //   <Row>
      //     <Col>1 of 2</Col>
      //     <Col>2 of 2</Col>
      //   </Row>
      //   <Row>
      //     <Col>1 of 3</Col>
      //     <Col>2 of 3</Col>
      //     <Col>3 of 3</Col>
      //   </Row>
      // </Container>
      <Container>
        <Row>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
          <Col xs={3}>
            <Item title="Backpack" weight={6} />
          </Col>
        </Row>
      </Container>
      // <CardDeck>
      //   <Item title={"BackPack"} weight={6} />
      //   <Item title={"BackPack"} weight={6} />
      //   <Item title={"BackPack"} weight={6} />
      //   <Item title={"BackPack"} weight={6} />
      // </CardDeck>
    );
  }
}

export default CampingList;
