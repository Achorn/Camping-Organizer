import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./component.css";
import Title from "../Title";
import CampingList from "../List";
import Total from "../Total";

const PageLayout = (props) => {
  return (
    <Container className="page-container">
      <Row className="row">
        <Col className="col-one" xs={4}>
          <Title
            title={"Camping Organizer"}
            subTitle={"Add your items, add their weight, have fun"}
          />
        </Col>
        <Col className="list-container">
          <CampingList />
        </Col>
      </Row>
    </Container>
  );
};

export default PageLayout;
