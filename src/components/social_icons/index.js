import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://wa.link/v82zc6" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faWhatsapp} />
          </a>
          <a href="https://www.facebook.com/helena.morgan.3532507" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
         </Col>
  );
}

export default SocialIcons;
