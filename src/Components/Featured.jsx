import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const published_date = [<p className='text-muted'><i className='bi bi-calendar-event me-1'/> Oct 22, 2023 •<i className='bi bi-clock mx-1'/>5 min read</p>, <p className='text-muted'><i className='bi bi-calendar-event me-1'/> Oct 22, 2023 •<i className='bi bi-clock mx-1'/>5 min read</p>, <p className='text-muted'><i className='bi bi-calendar-event me-1'/> Oct 22, 2023 •<i className='bi bi-clock mx-1'/>5 min read</p>]
const card_titles = ["The Indigo Disk: Everything We Know So Far About the Second DLC for Pokemon Scarlet and Violet", "A Nostalgic Journey: Rediscovering Shiny Pokemon in Pokemon X and Y", "Maps: Professor Oak's Guide"];
const card_text = ["A comprehensive overview of the leaked information about the second expansion for Pokemon Scarlet and Violet...", 
                    "Greetings, fellow trainers. Today, we embark on a journey down memory lane, revisiting the golden era of Pokemon...", 
                    "Welcome to the world of pokémon! My name is Oak! People call me the pokémon Prof! This world is inhabited by creatures called pokémon!"]
const card_imgs = ["../src/assets/switch.jpg", "../src/assets/shiny.jpg", "../src/assets/regions.jpg"]
const article_links = ["/articles/game-leaks", "/articles/shiny-hunt", "/articles/map"]
function Featured() {
    return (
        <>
        <h2 className='mb-4'> <i className="bi bi-stars fs-4 me-3"> </i>Featured</h2>
        <Row className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col sm={12} md={4} key={idx}>
            <Card>
              <Card.Img variant="top" src={card_imgs[idx]}/>
              <Card.Body>
                {published_date[idx]}
                <Card.Title>{card_titles[idx]}</Card.Title>
                <Card.Text>
                 {card_text[idx]}
                </Card.Text>
                <Link to={article_links[idx]}><Button>Read Article</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </>
    );
}
export default Featured