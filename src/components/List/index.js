import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";
import Item from "../Item";

class CampingList extends Component {
  render() {
    const list = [
      { title: "BackPack", weight: 5.08 },
      { title: "Treking Poles", weight: 3.01 },
      { title: "Tent", weight: 12 },
      { title: "Sleeping Pad", weight: 4.12 },
      { title: "Sleeping Bag", weight: 5 },
      { title: "Camera", weight: 15 },
      { title: "Tri-pod", weight: 5.6 },
      { title: "Jet-Boil", weight: 3.54 },
      { title: "BackPack", weight: 5 },
      { title: "BackPack", weight: 5 },
      { title: "BackPack", weight: 5.08 },
      { title: "Treking Poles", weight: 3.01 },
      { title: "Tent", weight: 12 },
      { title: "Sleeping Pad", weight: 4.12 },
      { title: "Sleeping Bag", weight: 5 },
      { title: "Camera", weight: 15 },
      { title: "Tri-pod", weight: 5.6 },
    ];
    return (
      <Container>
        <Row>
          {list.map((item) => {
            return (
              <Col className="classes.list-col" xs={4}>
                <Item title={item.title} weight={item.weight} />
              </Col>
            );
          })}
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
