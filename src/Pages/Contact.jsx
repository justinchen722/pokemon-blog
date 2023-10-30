import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../App.css'

const Contact = () => {
  return (
    <>
    
    <div className="blue-bg">
      <Container>
        <h2 className="mb-5 pt-3">
          <i className="bi bi-stars fs-4 me-3"></i>Contact Us
        </h2>

        <h3>We'd love to hear from you.</h3>
        <p>
          We'll answer every question you might have. Look forward to hearing
          from you.
        </p>
        <p>
          <i className="bi bi-envelope"></i> contact@pokeblog.com
        </p>
        <p>
          <i className="bi bi-telephone"></i> +98 02 296 4902
        </p>

        <Form className="py-5">
          <Form.Group className="mb-4" controlId="email">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="name">
            <Form.Control type="text" placeholder="Your name here" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="textarea">
            <Form.Control as="textarea" rows={3} placeholder="Ask a question or just say Hi"/>
          </Form.Group>
          <Button className="px-4 py-2" variant="outline-primary">Send <i className="bi bi-send ms-1"></i></Button>
        </Form>
      </Container>
    </div>

    <footer className="my-4">
        <Container className="text-center">
          <Row>
            <Col sm={12} lg={4}>
              <p>
                Follow Us: <i className="bi bi-twitter ms-1"></i>{" "}
                <i className="bi bi-facebook mx-3"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </Col>
            <Col sm={12} lg={4}>
              <p>
                Terms of service <span className="ms-4">Privacy Policy</span>
              </p>
            </Col>
            <Col sm={12} lg={4}>
              <p>&copy; 2023 Poke Blog. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Contact;
