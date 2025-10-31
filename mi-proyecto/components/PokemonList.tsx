"use client";

import { useState, useEffect, use } from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem";

type Pokemon = {
    name: string;
    url: string;
};

export default function PokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [totalClicks, setTotalClicks] = useState<number>(0);

    //Fetch inicial de los pokemones (solo una vez al montar el componente)
    useEffect(() => {
        async function fetchPokemons(){
            try {
                const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
                setPokemons(res.data.results);
            } catch (error) {
                console.error("Error al obtener los pokemones:", error);
            }
        }
        fetchPokemons();
    }, []);

    //Handler para contar clicks  globales
    const handleClick = () => setTotalClicks((prev)=> prev + 1);

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <p>Total de clicks en pokemones: {totalClicks}</p>

            <ul style ={{listStyle: "none", padding: 0}}>
                {pokemons.map((p)=> (
                    <PokemonItem 
                    key={p.name}
                    name={p.name}
                    url={p.url}
                    onClick={handleClick} 
                    />
                ))}
                
            </ul>
        </div>
    );
}
