import React, { Component } from 'react';
import '../project_main/style.css';
import {
  Col,
  Card,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import info from '../../const/project_info.json';

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image: '',
    };
  }

  render() {

    return (
      <Row xl={12} className="main_row">

        {info.data.map(item => (
          <Col xl={4} key={item.id} className="card_col">
            <Card className="card_main">
              <blockquote className="blockquote mb-0 card-body">
                <h2>
                  {item.name}
                </h2>
                <footer className="blockquote-footer">
                  Actividad : <strong title="Source Title">{item.Actividad}</strong>
                </footer>
                <br></br>
                <footer className="blockquote-footer">
                  Precio : <strong title="Source Title">.......................................................................................... {item.precio}</strong> <br></br>
                  {item.precio1 && (
                    <>
                      <strong title="Source Title">.............................................................. {item.precio1}</strong> <br></br>
                      <strong title="Source Title">.................................................... {item.precio2}</strong>
                    </>)}
                </footer>
              </blockquote>
              <Card.Body>

                {
                  item.link !== false &&
                  <Card.Link href={item.link} target="_blank"><FontAwesomeIcon className="icon" size="lg" icon={faLink} /></Card.Link>
                }
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    );
  }
}
