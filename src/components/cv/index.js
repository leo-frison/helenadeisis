import React from 'react';
import '../cv/style.css';
import {
  Col,
  Row
} from 'react-bootstrap';
import CLC from '../cv_left_content';

function CV() {
  return (
      <Row style={{height:'90%', width:'90%'}}>
        <Col xl={12} >
         < CLC />
        </Col>
      </Row>
  );
}

export default CV;
