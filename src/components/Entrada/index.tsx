import { useState, useEffect } from "react";
import FormularioEntrada from "../FormularioEntrada";
import NumberInput from "../NumberInput";
import ExibirSomaEntrada from "../SomaEntrada";
import "./Entrada.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onSomaEntradaChange: (novaSoma: number) => void;
}

function Entrada({ onSomaEntradaChange }: Props) {
  const [entradas, setEntradas] = useState<{ nome: string; valor: number; quantidade: number; valorAntesMultiplicacao: number }[]>([]);
  const [somaEntrada, setSomaEntrada] = useState<number>(0);
  const [listaExpandida, setListaExpandida] = useState<boolean>(false);

  useEffect(() => {
    const novoTotal = entradas.reduce((acc, entrada) => acc + entrada.valor, 0);
    setSomaEntrada(novoTotal);
    onSomaEntradaChange(novoTotal);
  }, [entradas, onSomaEntradaChange]);

  const handleEntradaSubmetido = (nome: string, valor: number, quantidade: number) => {
    const novoEntrada = { nome, valor: valor * quantidade, quantidade, valorAntesMultiplicacao: valor };
    setEntradas([...entradas, novoEntrada]);
  };

  const handleExcluirEntrada = (index: number) => {
    const novosEntradas = entradas.filter((_, i) => i !== index);
    setEntradas(novosEntradas);
  };

  const handleToggleLista = () => {
    setListaExpandida(!listaExpandida);
  };

  return (
    <section>
      <div>
        <h2>Entrada</h2>
        <div className="forms">
        <FormularioEntrada aoEntradaSubmetido={handleEntradaSubmetido} />
        </div>
        <div className="listaentrada">
          <h4>Lista de Entradas:</h4>
          <button className="btn" onClick={handleToggleLista}>
            {listaExpandida ? "Esconder Lista" : "Mostrar Lista"}
          </button>
          {listaExpandida && (
          <div>
            {entradas.map((entrada, index) => (
              <div className="lista" key={index}>
                {entrada.nome}: R$ {entrada.valorAntesMultiplicacao.toFixed(2)}, {entrada.quantidade}
                <button className="lista-btn" onClick={() => handleExcluirEntrada(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            ))}
          </div>
        )}
        </div>
        <div>
          <ExibirSomaEntrada somaEntrada={somaEntrada} />
        </div>
      </div>
    </section>
  );
}

export default Entrada;
