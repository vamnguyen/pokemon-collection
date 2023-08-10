import React from "react";
import { Detail, PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setViewDetail } = props;

  const selectPokemon = (id: number) => {
    if (!viewDetail.isOpened) {
      setViewDetail({
        id: id,
        isOpened: true,
      });
    }
  };

  return (
    <>
      <section
        className={
          viewDetail.isOpened
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {viewDetail.isOpened ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons?.length > 0 &&
          pokemons.map((pokemon) => (
            <div onClick={() => selectPokemon(pokemon.id)}>
              <PokemonList
                key={pokemon.id}
                viewDetail={viewDetail}
                setViewDetail={setViewDetail}
                abilities={pokemon.abilities}
                name={pokemon.name}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            </div>
          ))}
      </section>
    </>
  );
};

export default PokemonCollection;
