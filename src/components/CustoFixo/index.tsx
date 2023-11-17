import React, { useState, useEffect } from "react";
import FormularioCustoFixo from "../FormularioCustoFixo";
import ExibirSomaFixo from "../SomaFixo";
import "./CustoFixo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onSomaFixoChange: (novaSoma: number) => void;
}

function CustoFixo({ onSomaFixoChange }: Props) {
  const [custos, setCustos] = useState<{ nome: string; valor: number }[]>([]);
  const [somaFixo, setSomaFixo] = useState<number>(0);
  const [listaExpandida, setListaExpandida] = useState<boolean>(false);

  useEffect(() => {
    const novoTotal = custos.reduce((acc, custo) => acc + custo.valor, 0);
    setSomaFixo(novoTotal);
    onSomaFixoChange(novoTotal);
  }, [custos, onSomaFixoChange]);

  const handleCustoSubmetido = (nome: string, valor: number) => {
    const novoCusto = { nome, valor };
    setCustos([...custos, novoCusto]);
  };

  const handleToggleLista = () => {
    setListaExpandida(!listaExpandida);
  };

  const handleExcluirCusto = (index: number) => {
    const novosCustos = custos.filter((_, i) => i !== index);
    setCustos(novosCustos);
  };

  return (
    <div>
      <h2>Custo Fixo</h2>
      <FormularioCustoFixo aoCustoSubmetido={handleCustoSubmetido} />
      <div className="listafixo">
      <h4>Lista de Custos Fixos:</h4>
      <button className="btn" onClick={handleToggleLista}>
        {listaExpandida ? "Esconder Lista" : "Mostrar Lista"}
      </button>
      {listaExpandida && (
        <ul>
          {custos.map((custo, index) => (
            <li key={index}>
              {custo.nome}: R$ {custo.valor.toFixed(2)}{" "}
              <button className="lista-btn" onClick={() => handleExcluirCusto(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
      <div>
        <ExibirSomaFixo somaFixo={somaFixo} />
      </div>
    </div>
  );
}

export default CustoFixo;
