import { useState } from "react";
import Search from "../Search/Search";
import PokemonList from "../PokemonLIst/PokemonList";

// CSS import
import './Pokedex.css';
import PokemonDetails from "../PokemonDetails/PokemonDetails";


function Pokedex() {

    const [searchTerm, setSearchterm] = useState('');

    return (
        <div className="pokedex-wrapper">
           <Search updateSearchTerm={setSearchterm}/>
           { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokedex;