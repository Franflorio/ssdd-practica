"use client";

import { useState,useEffect } from "react";

/* //Ejemplo solo al montarse el componente
export default function Reloj() {
  const [hora, setHora] = useState<string>("");

  //solo al montarse el componente
    useEffect(() => {
        const ahora = new Date().toLocaleTimeString();
        setHora(ahora);
    }, []);
    return <div>La hora actual es: {hora}</div>;
} */

//Ejemplo con dependencias:
export default function Reloj() {
    const [hora, setHora] = useState<string>("");

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date().toLocaleTimeString();
            setHora(ahora);
            console.log("Reloj actualizado");
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return <div>La hora actual es: {hora}</div>;
}