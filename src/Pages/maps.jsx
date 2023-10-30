import Container from "react-bootstrap/Container";
import maps from "../assets/pokemongo.png";
import gara from "../assets/gara.png";
import cindy from "../assets/cindy.png";
import Kanto from "../assets/kanto.png";
import "../App.css";

function Map() {
  return (
    <Container>
      <p className="my-3">
        <i className="bi bi-clock me-2"></i>10 min read
      </p>
      <h2>Maps: Professor Oak's Guide</h2>
      <p className="text-muted">
        Welcome to the world of pokémon! My name is Oak! People call me the
        pokémon Prof! This world is inhabited by creatures called pokémon!
      </p>

      <p>
        by Justin Chen <i className="bi bi-dash-lg mx-3"></i>{" "}
        <i className="bi bi-calendar-event me-2"></i>Published October 22, 2023
      </p>

      <div className="text-center my-4">
        <img src={maps} className="articleImg" />
      </div>

      <p>
        In the enchanting world of Pokémon, adventure awaits at every corner!
        Join me, Professor Oak, as I introduce you to the captivating universe
        of Pokémon and guide you through the most remarkable regions and maps
        where legendary Pokémon dwell. Get ready to embark on a thrilling
        journey, capturing these magnificent creatures and uncovering the
        mysteries of the Pokémon world!
        <br />
        <br />
        <span className="fs-3">
          Exploring the Pokémon Universe: A Guide by Professor Oak
        </span>{" "}
        <br />
        Greetings, young trainers! Welcome to the wondrous realm of Pokémon,
        where extraordinary creatures and epic adventures await! As your trusted
        guide, I, Professor Oak, am here to lead you on a magical journey
        through the diverse regions and maps of the Pokémon world. Prepare
        yourselves for a thrilling expedition where you'll encounter legendary
        Pokémon and create unforgettable memories.
        <br />
        <br />
        <span className="fs-3">
          Map 1: Kanto Region - Where It All Began!
        </span>{" "}
        <div className="text-center my-4">
            <img src={Kanto} className="articleImg" />
        </div>
        <br />
        Our adventure kicks off in the Kanto region, the birthplace of Pokémon
        training. With its lush forests, sprawling cities, and formidable gyms,
        Kanto is a treasure trove of Pokémon wonders. Here, you'll find iconic
        locations like Pallet Town, Viridian Forest, and the majestic Indigo
        Plateau. Pay a visit to the powerhouses like Articuno, Zapdos, and
        Moltres, the legendary bird Pokémon, roosting in the Seafoam Islands and
        the Power Plant. Catching these avian marvels will test your skills, but
        the reward is absolutely worth the effort!
        <br />
        <br />
        <span className="fs-3">
          Map 2: Johto Region - Where Tradition Meets Adventure!
        </span>{" "}
        <div className="text-center my-4">
          <img src={cindy} width={300}/>
        </div>
        <br />
        Next on our list is the Johto region, a land steeped in tradition and
        mystery. With its scenic landscapes, historic sites, and the sprawling
        Safari Zone, Johto is a haven for Pokémon enthusiasts. Venture to the
        Bell Tower and the Whirl Islands to seek out the majestic Ho-Oh and
        Lugia, the legendary guardian deities of Johto. Catching these
        magnificent creatures requires patience and strategy, so gear up and get
        ready to capture these symbols of Johto's heritage.
        <br />
        <br />
        <span className="fs-3">
          Map 3: Sinnoh Region - Uncover Ancient Secrets!
        </span>{" "}
        <div className="text-center my-4">
          <img src={gara} className="articleImg" />
        </div>
        <br />
        Our final destination is the Sinnoh region, a land of ancient legends
        and hidden wonders. Sinnoh boasts diverse environments, from snowy peaks
        to lush forests, making it a perfect habitat for legendary Pokémon.
        Prepare to explore the depths of Turnback Cave to encounter Giratina,
        the enigmatic Renegade Pokémon. Additionally, brave the harsh climate of
        the Snowpoint Temple to find Regigigas, the colossal legendary Pokémon.
        Capturing these awe-inspiring creatures will test your determination and
        skill, but the thrill of victory is incomparable! As our journey through
        these magnificent regions comes to an end, remember that the world of
        Pokémon is vast and ever-expanding. New regions, maps, and legendary
        Pokémon await daring trainers like you, ready to embark on exciting
        quests and forge unbreakable bonds with their Pokémon companions. So,
        young trainers, gear up, grab your Poké Balls, and set forth on your own
        Pokémon adventure. With courage in your heart and determination in your
        eyes, there's no limit to the heights you can reach in the Pokémon
        world. May your journey be filled with thrilling encounters, lifelong
        friendships, and legendary victories.
        <br />
        <br />
        <b>Happy exploring! - Professor Oak</b>
      </p>
      <div className="mb-4">
        <p>
          Share: <i className="bi bi-twitter fs-5" />
          <i className="bi bi-facebook mx-2 fs-5" />
          <i className="bi bi-linkedin fs-5" />
          <i className="bi bi-reddit ms-2 fs-5" />
        </p>
      </div>
      <hr className="mb-5" />
    </Container>
  );
}

export default Map;
