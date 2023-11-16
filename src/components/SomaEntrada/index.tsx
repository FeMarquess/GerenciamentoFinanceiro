import React from "react";
import "./SomaEntrada.css"

interface Props {
  somaEntrada: number;
}

const ExibirSomaEntrada: React.FC<Props> = ({ somaEntrada }) => {
  return (
    <div className="somaentrada">
      <h3>Soma Total da Entrada: R$ {somaEntrada.toFixed(2)}</h3>
    </div>
  )
};

export default ExibirSomaEntrada;
