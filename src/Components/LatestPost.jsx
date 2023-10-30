import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';


// Titles
const titles = [
    "Unearthing the Origins: The History of Pokémon",
    "Mastering the Art of Pokémon Training: Tips and Tricks",
    "Legendary Encounters: A Closer Look at Mythical Pokémon",
    "Exploring the Diverse Ecosystems of the Pokémon World",
    "Pokémon and Culture: How Pokémon Has Shaped Pop Culture",
    "Eevee and Its Many Evolutions: A Comprehensive Guide",
    "The Psychology of Pokémon: What Makes Them So Addictive?",
    "Pokémon Lore: Untold Stories and Hidden Secrets"
  ];
  
  // Summaries
  const summaries = [
    "Delve into the fascinating history of Pokémon, from its humble beginnings as a video game to the global phenomenon it is today. Explore the inspirations behind the original 151 Pokémon and how they've evolved over time.",
    "Whether you're a seasoned trainer or just starting your journey, this post offers expert tips on effective training strategies, team-building, and battling techniques to help you become a Pokémon Master.",
    "Discover the elusive and powerful Mythical Pokémon, from Mew to Arceus. Learn about their unique characteristics, origins, and how to obtain them in various Pokémon games.",
    "Take a virtual journey through the varied regions in the Pokémon world, from the lush forests of Viridian to the bustling metropolis of Lumiose. Learn about the different species of Pokémon that inhabit each environment and their adaptations.",
    "Explore the impact of Pokémon on popular culture, from its influence on fashion and merchandise to its presence in movies, TV shows, and even music. Learn about the enduring legacy of this beloved franchise.",
    "Dive deep into the world of Eevee and its multiple evolutions. Discover the unique traits and strengths of each Eeveelution, and learn how to choose the perfect evolution for your team.",
    "Uncover the psychological elements that make Pokémon games so engaging and addictive. Explore concepts like the reward system, nostalgia, and the sense of accomplishment that keep trainers coming back for more.",
    "Journey into the rich lore of the Pokémon world, uncovering hidden stories, mysteries, and secrets that even avid fans may not know. From legendary battles to ancient prophecies, there's more to the Pokémon universe than meets the eye."
  ];

  const card_imgs = ["../src/assets/pokemon_history.jpeg", "../src/assets/poke_battle.png", 
                        "../src/assets/poke_myth.png", "../src/assets/johto_region.jpeg", 
                        "../src/assets/pokemon_pop.png","../src/assets/eevee_evolutions.png", 
                        "../src/assets/addiction.jpeg","../src/assets/poke_lore.jpeg"
                    ];
function LatestPost() {
    const [visibleCards, setVisibleCards] = useState(4);
    
    const showMoreCards = () => {
        setVisibleCards(prev => prev + 4);
    };
    const showLessCards = () => {
        setVisibleCards(prev => prev - 4);
    };
    
    return (
        <>
        <h2 className='mb-4'>
            <i className="bi bi-stars fs-4 me-3"></i>Latest Post
        </h2>
        <Row className="g-4">
            {Array.from({ length: visibleCards }).map((_, idx) => (
            <Col sm={12} md={3} key={idx}>
                <Card>
                <Card.Img variant="top" src={card_imgs[idx]} />
                <Card.Body>
                    <Card.Title>{titles[idx]}</Card.Title>
                    <Card.Text>{summaries[idx]}</Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        {visibleCards < titles.length && (
            <button className="btn btn-primary" onClick={showMoreCards}>
            Show More
            </button>
        )}
        {visibleCards == titles.length && (
            <button className="btn btn-primary" onClick={showLessCards}>
            Show Less
            </button>
        )}

        </>
    );
    }
    
    export default LatestPost;
                      
                      
                      