import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import "./component.css";
import Item from "../Item";
import NewItem from "../NewItem";

import Total from "../Total";

class CampingList extends Component {
  render() {
    const itemAddedHandler = (name, weight) => {
      this.props.dispatch({ type: "add", name, weight });
    };

    const deleteClickedHandler = (id) => {
      this.props.dispatch({ type: "remove", id });
    };

    return (
      <Container>
        <Total />
        <Row>
          {this.props.list.map((item) => {
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
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(CampingList);
