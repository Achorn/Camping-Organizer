import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";
import Item from "../Item";
import NewItem from "../NewItem";

const initState = [
  { title: "BackPack", weight: 5.08, id: 0 },
  { title: "Treking Poles", weight: 3.01, id: 1 },
  { title: "Tent", weight: 12, id: 2 },
  { title: "Sleeping Pad", weight: 4.12, id: 3 },
  { title: "Sleeping Bag", weight: 5, id: 4 },
  { title: "Camera", weight: 15, id: 5 },
  { title: "Tri-pod", weight: 5.6, id: 6 },
  { title: "Jet-Boil", weight: 3.54, id: 7 },
  { title: "BackPack", weight: 5, id: 8 },
  { title: "BackPack", weight: 5, id: 9 },
  { title: "BackPack", weight: 5.08, id: 10 },
];

class CampingList extends Component {
  state = {
    list: initState,
  };

  render() {
    const itemAddedHandler = (name, weight) => {
      // event.preventDefault();
      console.log("Add Item Button Clicked");
      console.log(name, weight);
      let newList = [...this.state.list];
      newList.push({
        title: name,
        weight: Number.parseFloat(weight),
        id: this.state.list.length + 1,
      });
      this.setState({ list: newList });
    };

    const deleteClickedHandler = (id) => {
      let newList = [...this.state.list];
      let updatedList = newList.filter((item) => {
        return item.id !== id;
      });
      this.setState({ list: updatedList });
    };

    return (
      <Container>
        <Row>
          {this.state.list.map((item) => {
            return (
              <Col className="classes.list-col" xs={4} key={item.id}>
                <Item
                  deleteClicked={deleteClickedHandler}
                  title={item.title}
                  weight={item.weight}
                  id={item.id}
                />
              </Col>
            );
          })}
          <Col className="classes.list-col" xs={4}>
            <NewItem addItem={itemAddedHandler} />
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
