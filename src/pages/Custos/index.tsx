import React, { useState } from "react";
import CustoVariado from "../../components/CustoVariado";
import CustoFixo from "../../components/CustoFixo";
import Entrada from "../../components/Entrada";
import ExibirSomaTotal from "../../components/SomaTotal";
import "./Custos.css"

function Custos() {
  const [somaVariado, setSomaVariado] = useState<number>(0);
  const [somaFixo, setSomaFixo] = useState<number>(0);
  const [somaEntrada, setSomaEntrada] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<number>(0);

  const handleSomaVariado = (novaSoma: number) => {
    setSomaVariado(novaSoma);
  };

  const handleSomaFixo = (novaSoma: number) => {
    setSomaFixo(novaSoma);
  };

  const handleSomaEntrada = (novaSoma: number) => {
    setSomaEntrada(novaSoma);
  };

  const handleSaveQuantidade = (novoQuantidade: number) => {
    setQuantidade(novoQuantidade);
  };

  const somaTotal = somaEntrada - (somaVariado + somaFixo);

  return (
    <div className="custos-wrapper">
      <div className="custos">
        <div className="forms-custos">
          <CustoFixo onSomaFixoChange={handleSomaFixo} />
        </div>
        <div className="forms-custos">
          <CustoVariado onSomaVariadoChange={handleSomaVariado} />
        </div>
        <div className="forms-custos">
          <Entrada onSomaEntradaChange={handleSomaEntrada} />
        </div>
      </div>
      <div className="soma">
        <ExibirSomaTotal somaTotal={somaTotal} />
      </div>
    </div>
  );
}

export default Custos;
