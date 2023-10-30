import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Latest from "../Components/LatestPost";

function LatestPage() {
  return (
    <>
    <Container>
      <Latest />
    </Container>
    
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
}
export default LatestPage;
