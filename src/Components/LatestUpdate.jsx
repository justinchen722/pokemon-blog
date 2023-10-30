import React from "react";
import "./LatestUpdate.css";
import pikachuImage from '../assets/pikachu.png';
import bulbasaur from '../assets/bulbasaur.png';
import pokemon from '../assets/pokemon.png';
import hoho from '../assets/hoho.png';

function Latest() {

  return (
    <>
      <div className="containers">
        <div className="latest">
          <h3>Latest News and</h3>
          <h3>Updates and Tips</h3>
          <br />
          <div className="description">
            <b>I wanna be the very best</b><br />
            <b>like no one ever was</b> <br />
            <b>To catch them is my real test,</b><br />
            <b>To train them is my cause!</b><br />
          </div>
        </div>
        <div className="pikachu">
          <img className='pikachuImage' src={pikachuImage} alt="Pikachu" width="100" height = "auto"/>
        </div>
        <div className="bub">
          <img className='bubImage' src={bulbasaur} alt="Pikachu" width="100" height = "auto"/>
        </div>
        <div className="pokemon">
          <img className='pokemonImage' src={pokemon} alt="Pikachu" width="300" height = "auto"/>
        </div>
        <div className="hoho">
          <img className='hoImage' src={hoho} alt="Pikachu" width="300" height = "auto"/>
        </div>
      </div>
    </>
  );
}

export default Latest;
