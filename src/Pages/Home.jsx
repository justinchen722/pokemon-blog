import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Latest from "../Components/LatestUpdate";
import Featured from "../Components/Featured";
import Authors from "../Components/TopAuthors";
import LatestPost from "../Components/LatestPost";

const Home = () => {
  return (
    <>
      <section id="latest" className="blue-bg py-5">
        <Container>
          <Latest />
        </Container>
      </section>

      <section id="featured" className="alt-bg py-5">
        <Container>
          <Featured />
        </Container>
      </section>

      <section id="latest_post" className="blue-bg pb-5 pt-4">
        <Container>
          <LatestPost />
        </Container>
      </section>

      <section id="top-authors" className="alt-bg py-5">
        <Container>
          <Authors />
        </Container>
      </section>

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

export default Home;
