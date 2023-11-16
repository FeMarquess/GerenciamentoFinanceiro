import React from "react";
import "./SomaFixo.css"

interface Props {
  somaFixo: number;
}

const ExibirSomaFixo: React.FC<Props> = ({ somaFixo }) => {
  return (
    <div className="somafixo">
      <h3>Soma do custo fixo: R$ {somaFixo.toFixed(2)}</h3>
    </div>
  )
};

export default ExibirSomaFixo;
