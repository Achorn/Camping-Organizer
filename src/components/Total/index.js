import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
function Total(props) {
  let totalItems = props.list.length;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let totalWeight = 0;
  props.list.map((item) => {
    console.log(totalWeight);
    totalWeight += item.weight;
  });
  return (
    <Container fluid={true} className="p-3">
      <Row className="justify-content-around">
        <Col className="text-align-center">Total Items: {totalItems}</Col>
        <Col className="text-align-center">Total Weight: {totalWeight}</Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(Total);
