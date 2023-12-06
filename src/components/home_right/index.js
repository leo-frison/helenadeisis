import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/hell.png';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <div className="circular-image-container">
            <Image src={Foad} className="home-right-main-img" alt="Image of Hellen Morgan" />
          </div>
          <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Right;
