import { useState, useEffect } from "react";
import FormularioCustoVariado from "../FormularioCustoVariado";
import NumberInput from "../NumberInput";
import ExibirSomaVariado from "../SomaVariado";
import "./CustoVariado.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onSomaVariadoChange: (novaSoma: number) => void;
}

function CustoVariado({ onSomaVariadoChange }: Props) {
  const [custos, setCustos] = useState<{ nome: string; valor: number; quantidade: number; valorAntesMultiplicacao: number }[]>([]);
  const [somaVariado, setSomaVariado] = useState<number>(0);
  const [listaExpandida, setListaExpandida] = useState<boolean>(false);

  useEffect(() => {
    const novoTotal = custos.reduce((acc, variado) => acc + variado.valor, 0);
    setSomaVariado(novoTotal);
    onSomaVariadoChange(novoTotal);
  }, [custos, onSomaVariadoChange]);

  const handleCustoSubmetido = (nome: string, valor: number, quantidade: number) => {
    const novoCusto = { nome, valor: valor * quantidade, quantidade, valorAntesMultiplicacao: valor };
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
      <h2>Custo Variado</h2>
      <div className="forms">
        <FormularioCustoVariado aoCustoSubmetido={handleCustoSubmetido} />
      </div>
      <div className="listavariado">
        <h4>Lista de Custos Variáveis:</h4>
        <button className="btn" onClick={handleToggleLista}>
          {listaExpandida ? "Esconder Lista" : "Mostrar Lista"}
        </button>
        {listaExpandida && (
          <div>
            {custos.map((custo, index) => (
              <div className="lista" key={index}>
                {custo.nome}: R$ {custo.valorAntesMultiplicacao.toFixed(2)}, {custo.quantidade}
                <button className="lista-btn" onClick={() => handleExcluirCusto(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <ExibirSomaVariado somaVariado={somaVariado} />
      </div>
    </div>
  );
}

export default CustoVariado;
