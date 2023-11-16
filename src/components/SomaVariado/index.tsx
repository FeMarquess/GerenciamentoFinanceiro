import React from "react";
import "./SomaVariado.css"

interface Props {
  somaVariado: number;
}

const ExibirSomaVariado: React.FC<Props> = ({ somaVariado }) => {
  return (
    <div className="somavariado"> 
      <h3>Soma do custo variado: R$ {somaVariado.toFixed(2)}</h3>
    </div>
  )
};

export default ExibirSomaVariado;
