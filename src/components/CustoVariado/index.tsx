import { useState, useEffect } from "react";
import FormularioCusto from "../FormularioCusto";
import NumberInput from "../NumberInput";
import ExibirSomaVariado from "../SomaVariado";
import "./CustoVariado.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onSomaVariadoChange: (novaSoma: number) => void;
}

function CustoVariado({ onSomaVariadoChange }: Props) {
  const [custos, setCustos] = useState<{ nome: string; valor: number }[]>([]);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [somaVariado, setSomaVariado] = useState<number>(0);
  const [listaExpandida, setListaExpandida] = useState<boolean>(false);

  useEffect(() => {
    const novoTotal = custos.reduce((acc, custo) => acc + custo.valor * quantidade, 0);
    setSomaVariado(novoTotal);
    onSomaVariadoChange(novoTotal);
  }, [custos, quantidade, onSomaVariadoChange]);

  const handleCustoSubmetido = (nome: string, valor: number) => {
    const novoCusto = { nome, valor };
    setCustos([...custos, novoCusto]);
  };

  const handleSaveQuantidade = (quantidade: number) => {
    setQuantidade(quantidade);
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
      <h2>Custo Variado</h2>
      <FormularioCusto aoCustoSubmetido={handleCustoSubmetido} />
      <div className="listavariado">
        <h4>Lista de Custos Variáveis:</h4>
        <button className="btn" onClick={handleToggleLista}>
          {listaExpandida ? "Esconder Lista" : "Mostrar Lista"}
        </button>
        {listaExpandida && (
          <div>
            {custos.map((custo, index) => (
              <div key={index}>
                {custo.nome}: R$ {custo.valor.toFixed(2)}
                <button className="lista-btn" onClick={() => handleExcluirCusto(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="quantidadecusto">
        <NumberInput onSaveQuantidade={handleSaveQuantidade} />
        <h4>Quantidade de entrada: {quantidade}</h4>
      </div>
      <div>
        <ExibirSomaVariado somaVariado={somaVariado} />
      </div>
    </div>
  );
}

export default CustoVariado;
