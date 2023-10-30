import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import emanHeadshot from "../assets/eman_headshot.jpeg";
import jefferyHeadshot from "../assets/jeff.jpeg";
import justinHeadshot from "../assets/justin_headshot.jpeg";

const authors = [
  {
    name: "Emmanuel Cobian",
    title: "Video Game Specialist",
    bio: "Favorite Pokemon: Lopunny",
    headshot: emanHeadshot,
  },
  {
    name: "Jeffrey Millan",
    title: "Shiny Hunting Specialist",
    bio: "Favorite Pokemon: Giratina",
    headshot: jefferyHeadshot,
  },
  {
    name: "Justin Chen",
    title: "Region Specialist",
    bio: "Favorite Pokemon: Pikachu",
    headshot: justinHeadshot,
  },
];

function Authors() {
  return (
    <>
      <h2 className="mb-4">
        <i className="bi bi-stars fs-4 me-3"></i>Authors
      </h2>
      <Row>
        {authors.map(({ name, title, bio, headshot }, index) => {
          return (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex gap-4">
                    <div>
                        <img src={headshot} width={100}/>
                    </div>
                    <div>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                        {title}
                        </Card.Subtitle>
                        <p>{bio}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Authors;
