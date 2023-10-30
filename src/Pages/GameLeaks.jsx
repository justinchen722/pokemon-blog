import Container from "react-bootstrap/Container";
import articleImg from '../assets/leaks.jpg';
import '../App.css'

function LeaksArticle() {
  return (
    <Container>
      <p className="my-3">
        <i className="bi bi-clock me-2"></i>5 min read
      </p>
      <h2>
        The Indigo Disk: Everything We Know So Far About the Second DLC for
        Pokemon Scarlet and Violet
      </h2>
      <p className="text-muted">
        A comprehensive overview of the leaked information about the second
        expansion for Pokemon Scarlet and Violet, featuring new Pokemon, forms,
        mechanics, and plot.
      </p>

      <p>
        by Emmanuel Cobian <i className="bi bi-dash-lg mx-3"></i>{" "}
        <i className="bi bi-calendar-event me-2"></i>Published October 22, 2023
      </p>

      <div className="text-center my-4">
        <img src={articleImg} className="articleImg"/>
      </div>

      <p>
        Recent Leaks Reveal New Pokemon and Features for Scarlet and Violet
        Pokemon fans are eagerly awaiting the release of the second DLC for
        Pokemon Scarlet and Violet, The Indigo Disk, which promises to add new
        Pokemon, forms, and mechanics to the game. However, some leakers have
        already spilled the beans on what to expect from the upcoming expansion,
        revealing some surprising details and sparking speculation among the
        community.
        <br />
        <br />
        <span className="fs-3">New Pokemon</span> <br />
        Puudle, Peachy, and More One of the most exciting aspects of any new
        Pokemon game or DLC is the introduction of new Pokemon. The Indigo Disk
        is no exception, as it will reportedly add at least six new Pokemon to
        the Paldean Pokedex. These include: - Puudle, a blue dog-like Pokemon
        that resembles a poodle. It is a Water-type that can learn moves like
        Bubble Beam, Aqua Jet, and Groom. It evolves into Poodog, a
        Water/Fairy-type that has curly fur and a pink bow on its head. -
        Peachy, a peach-like Pokemon that has a bite mark on its side. It is a
        Grass/Poison-type that can learn moves like Toxic, Leech Seed, and Peach
        Bomb. It evolves into Peacher, a Grass/Poison-type that has a crown of
        leaves and a stem on its head. - Kieran, a red and black dragon-like
        Pokemon that has two horns on its head. It is a Dragon/Fire-type that
        can learn moves like Dragon Claw, Fire Blast, and Inferno. It evolves
        into Kieros, a Dragon/Fire-type that has four horns and wings on its
        back. - Tera Forms, new forms of existing Pokemon that are affected by
        the crystallization gimmick of the DLC. These include Tera Form
        Charizard, which is a Fire/Crystal-type that has blue crystals on its
        body; Tera Form Gyarados, which is a Water/Crystal-type that has purple
        crystals on its fins; and Tera Form Tyranitar, which is a
        Rock/Crystal-type that has green crystals on its spikes. These new
        Pokemon were allegedly leaked by Riddler Khu and Centro Leaks, two
        prolific leakers who have been known to reveal accurate information
        about previous Pokemon games.
        <br />
        <br />
        <span className="fs-3">New Features</span> <br />
        Breeding System, Crystallization Gimmick, and More The Indigo Disk will
        also introduce new features and mechanics to enhance the gameplay
        experience of Pokemon Scarlet and Violet. These include: - A revamped
        breeding system that involves Pokemon eggs and picnics. Players can
        breed their Pokemon by placing them in an egg basket and taking them to
        a picnic spot in the DLC area. The picnic spot will have different
        themes and decorations depending on the season and the type of Pokemon
        in the basket. The eggs will hatch faster if the player interacts with
        them during the picnic. - A crystallization gimmick that affects some
        Pokemon and areas in the DLC. Crystallization is a phenomenon that
        occurs when certain Pokemon are exposed to high levels of energy from
        the Area Zero crystals. Crystallization can change the appearance, type,
        and abilities of some Pokemon, as well as create new forms such as Tera
        Forms. Crystallization can also alter the environment, creating crystal
        structures and obstacles in some places. - A new story arc that involves
        Blueberry Academy, a prestigious school for Pokemon trainers in Unova.
        The player will enroll in the academy and meet new characters such as
        Professor Juniper's son Nate, who is also a rival; Bianca's daughter
        Belinda, who is a friend; and Cheren's son Chase, who is a teacher. The
        player will also encounter Team Plasma, who are plotting to use the Area
        Zero crystals for their nefarious purposes. These new features were also
        leaked by Riddler Khu and Centro Leaks, as well as some other sources
        such as Chinese riddlers.
        <br />
        <br />
        <span className="fs-3">Conclusion</span> <br /> What to Expect from The
        Indigo Disk The Indigo Disk is shaping up to be an exciting addition to
        Pokemon Scarlet and Violet, offering new Pokemon, forms, features, and
        story elements for players to enjoy. However, these leaks are not
        official confirmations, and some details may change or be inaccurate.
        Therefore, fans should take them with a grain of salt and wait for
        official announcements from Game Freak or Nintendo. The Indigo Disk is
        expected to release in November 2023 for Nintendo Switch. It will be
        available as part of The Hidden Treasure of Area Zero DLC bundle or as a
        separate purchase for $19.99 USD.
      </p>
      <div className="mb-4">
        <p>Share: <i className="bi bi-twitter fs-5" /><i className="bi bi-facebook mx-2 fs-5" /><i className="bi bi-linkedin fs-5" /><i className="bi bi-reddit ms-2 fs-5" /></p>
      </div>
      <hr className="mb-5"/>
    </Container>
  );
}

export default LeaksArticle;
