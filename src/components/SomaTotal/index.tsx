import React from "react";
import "./SomaTotal.css"

interface Props {
  somaTotal: number;
}

const ExibirSomaTotal: React.FC<Props> = ({ somaTotal }) => {
  return (
    <div className="somatotal">
      <h3>Lucro: R$ {somaTotal.toFixed(2)}</h3>
    </div>
  )
};

export default ExibirSomaTotal;
