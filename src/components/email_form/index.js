import React from 'react';
import '../email_form/style.css';
import * as emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Modal, Image } from 'react-bootstrap';
import ClipLoader from 'react-spinners/BarLoader';

class Email_Form extends React.Component {

  constructor(props, context) {
		super(props, context);
    this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
		};
	}

	handleClose() {
    this.setState({ show: false });
    this.setState({ name: '' });
    this.resetForm();
	}

	handleShow() {
		this.setState({ show: true, loading: false });
	}

  state = {
    name: '',
    email: '',
    message: '',
    show: false,
  }
  
  handleSubmit(e) {
    e.preventDefault(); 
    this.setState({ loading: true });   
    
    const {email, name , message } = this.state    
    
    let templateParams = {
      email: email,
      from_name: name,
      to_name: "Helena de Isis",
      message: message,
      reply_to: "leonardofrison666@gmail.com"
     }
     
     //=======================
     // Use your own API key
     //=======================

     emailjs.send(
      'service_41f1t0r',
      'template_vw2tzzc',
       templateParams,
      "8mWQQU7mo8Wxjd8VC" 
     )
     .then((result) => {
        this.handleShow();
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });     
    }
    
    resetForm() {
    this.setState({
      email: '',
      message: '',
      modal: false,
    })
  }
  
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render() {
    return (
  
          <Form onSubmit={this.handleSubmit.bind(this)} className="Contact-form">
            <p className="contact-form-header">Formulario de Consultas</p>
             <FormGroup className="contact_input">
              <Form.Control type="email" value={this.state.email} className="contact_input_text" onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required/>
             </FormGroup>
            <FormGroup controlId="formBasicName" className="contact_input">
              <Form.Control as="textarea" rows="1" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Nombre Apellido" className="contact_input_text" required />
            </FormGroup>
            <FormGroup controlId="formBasicMessage" className="contact_input">
              <Form.Control as="textarea" rows="6" value={this.state.message} placeholder="Mensaje" onChange={this.handleChange.bind(this, 'message')} className="contact_input_text" required/>
            </FormGroup>
           <Button className="contact-email-text-btn" variant="outline-light" size="lg" type="submit">
              Enviar
              <ClipLoader
                size={5} // or 150px
                color={"#ffffff"}
                loading={this.state.loading}
              />
            </Button>
            
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={this.state.show} onHide={this.handleClose}
                centered
              >
              <Modal.Body className="contact_success_modal_body">
                <Image className="contact_success_modal_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ4yd8O8RN2HmlXaYb-Zh_XCaTgq72BPl_7vP3dSvpLS6SFG4sWnuwbQIAaM9s3kY074&usqp=CAU" />
                <h5>Gracias <span><strong>{this.state.name}</strong> su mensaje fue enviado correctamente!!</span>😇</h5>
                <h6>Me pondre en contacto con usted a la brevedad</h6>
                < br />
                <Button variant="outline-light" size="lg" onClick={this.handleClose} className="contact-email-text-btn">Close</Button>
              </Modal.Body>
           </Modal>
          </Form>
    )
  }
}

export default Email_Form
