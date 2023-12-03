import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2019-{(new Date().getFullYear())} <strong>Hellen Morgan</strong>,  <small>V1.0</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
