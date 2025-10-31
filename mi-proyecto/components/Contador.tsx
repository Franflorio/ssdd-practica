"use client";
import { useState } from "react";
export default function Contador() {
  //contador = valor actual
  //setContador = funcion para actualizar el valor
  const [contador, setContador] = useState<number>(0);
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}