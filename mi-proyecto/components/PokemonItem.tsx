"use client";

import { useState } from "react";

type PokemonProps = {
    name: string;
    url: string;
    onClick: () => void;
};

export default function PokemonItem({ name, url, onClick }: PokemonProps) {
    const [clicks, setClicks] = useState<number>(0);

    const handleLocalClick = () => {
        setClicks((c)=> c + 1);
        onClick();
    };

    return (
        <li
            onClick={handleLocalClick}
            style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: "10px",
                marginBottom: "8px",
                cursor: "pointer",
            }}
        >
            <strong>{name}</strong>
            <p style ={{fontSize: "0.9em", color: "#555"}}>Clicks en este Pokémon: {clicks}</p>
        </li>
    );
}