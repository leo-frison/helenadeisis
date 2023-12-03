import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
  Link
} from "react-router-dom";

function Home_Left() {
  return (
    <Container className="home-left" >
      <Row className="home-left-main">
        <Col xl={12} className="home-left-main-col">
          <h2 className="second_line">
            <strong>Helena de Isis</strong>
          </h2>
          <h3>
            <ReactTypingEffect
              text="Soy medium natural de nacimiento con una fuerte conexión con la fuente. Me dedico a la Alta Magia, una magia que no hace pactos ni genera karma por su naturaleza divina. Conoce la virtud de la verdadera Magia con el Oráculo de Helena De Isis.
¿Sentis que ya no tenes propósito? ¿Te sentís maldito? ¿Con mala suerte? ¿La soledad pesa en tu ser? ¿Te cuesta confiar en tu prójimo? ¿No podes dormir? O tal vez quieras expandir tus horizontes en tu camino y espiritualidad. En éste Oráculo encontrarás el camino. Déjame guiarte hacia él.  ... " //text=["Hello.", "World!"]
              className="typical"
              speed="100"
              eraseDelay="500000"
            />
          </h3>

          <br />
          <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">Experiencia</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact" className="home-left-aboutme">Consultas</Link></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home_Left;
