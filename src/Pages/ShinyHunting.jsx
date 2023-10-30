import Container from "react-bootstrap/Container";
import articleImg from '../assets/pokemon_x_y.jpeg';
import '../App.css'

function ShinyArticle() {
  return (
    <Container>
      <p className="my-3">
        <i className="bi bi-clock me-2"></i>5 min read
      </p>
      <h2>
        A Nostalgic Journey: Rediscovering Shiny Pokemon in Pokemon X and Y
      </h2>
      <p className="text-muted">
        Greetings, fellow trainers. 
        Today, we embark on a journey down memory lane, revisiting the golden era of Pokemon with the sixth-generation games, Pokemon X and Y. 
        As we delve into the art of shiny Pokemon hunting, it's hard not to feel a sense of nostalgia for the adventures that shaped our love for these captivating creatures. 
        Join me as we rediscover the magic and excitement that defined our early encounters with shinies.
      </p>

      <p>
        by Jeffrey Millan <i className="bi bi-dash-lg mx-3"></i>{" "}
        <i className="bi bi-calendar-event me-2"></i>Published October 22, 2023
      </p>

      <div className="text-center my-4">
        <img src={articleImg} className="articleImg"/>
      </div>

      <p>
        <span className="fs-3">1. Random Wild Encounters</span> <br />
            In the enchanting realm of X/Y, the odds of stumbling upon a shiny have been adjusted to 1 in 4096. 
            A significant improvement from earlier days, evoking memories of the excitement and surprise that came with each encounter.
        <br />
        <br />
        <span className="fs-3">2. Pokeradar Chaining</span> <br />
            Ah, the intricate dance of the Pokeradar. 
            A method that requires patience and finesse, reminiscent of the meticulous steps we once took in pursuit of elusive treasures.
            Each successful chain brings back echoes of past victories.
        <br />
        <br />
        <span className="fs-3">3. Chain Fishing</span> <br />
            Casting our lines into the tranquil waters, we're reminded of the serene moments spent by the water's edge. 
            The thrill of a shiny reveal after consecutive attempts evokes a sense of accomplishment that harks back to simpler times.
        <br />
        <br />
        <span className="fs-3">4. Friend Safari</span> <br />
            The Friend Safari, a virtual haven of exploration and camaraderie, takes us back to the days of shared adventures with friends. 
            The thrill of discovering shinies here feels like a nod to the bonds we forged in our Pokemon journeys.
        <br />
        <br />
        <span className="fs-3">5. Masuda Method</span> <br />
            Breeding Pokemon from distant lands, a practice that feels like a throwback to the days when we were wide-eyed trainers, discovering the wonders of the world. 
            The joy of hatching a shiny is a testament to the enduring spirit of discovery.
        <br />
        <br />
        <span className="fs-3">6. Horde Hunting</span> <br />
            The simultaneous encounters of horde hunting transport us back to the hustle and bustle of tall grass, where every rustle held the promise of something extraordinary. 
            It's a method that pays homage to the thrill of the hunt.
        <br />
        <br />
        <span className="fs-3">7. SVExchange</span> <br />
            The sense of community fostered by SVExchange resonates with the camaraderie that defined our early days as trainers. 
            The shared excitement of hatching shinies is a testament to the enduring bonds forged in the world of Pokemon.
        <br />
        <br />
        <span className="fs-3">8. Soft Resetting</span> <br />
            Soft resetting, a method of trials and tenacity, recalls the days when we faced legendary Pokemon with determination in our hearts. 
            Each reset is a testament to the perseverance that defined our early adventures.
        <br />
        <br />
        <span className="fs-3">Conclusion</span> <br />
            As we journey through these methods, we're reminded of the countless hours spent exploring the world of Pokemon, each encounter etched in our memories. 
            The Shiny Charm, a beacon of achievement, brings with it a rush of nostalgia for the challenges we once overcame. 
            And as we reflect on our journey, let us remember that the heart of Pokemon lies not only in the pursuit of shinies, but in the enduring spirit of discovery and camaraderie that has defined our love for these extraordinary creatures. 
            Here's to the cherished memories and the adventures yet to come, fellow trainers. Happy hunting!
        <br />
        <br />
      </p>
      <div className="mb-4">
        <p>Share: <i className="bi bi-twitter fs-5" /><i className="bi bi-facebook mx-2 fs-5" /><i className="bi bi-linkedin fs-5" /><i className="bi bi-reddit ms-2 fs-5" /></p>
      </div>
      <hr className="mb-5"/>
    </Container>
  );
}

export default ShinyArticle;
