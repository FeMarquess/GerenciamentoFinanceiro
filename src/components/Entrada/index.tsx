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
  const [entradas, setEntradas] = useState<{ nome: string; valor: number }[]>([]);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [somaEntrada, setSomaEntrada] = useState<number>(0);
  const [listaExpandida, setListaExpandida] = useState<boolean>(false);

  useEffect(() => {
    const novoTotal = entradas.reduce((acc, entrada) => acc + entrada.valor * quantidade, 0);
    setSomaEntrada(novoTotal);
    onSomaEntradaChange(novoTotal);
  }, [entradas, quantidade, onSomaEntradaChange]);

  const handleEntradaSubmetido = (nome: string, valor: number) => {
    const novoEntrada = { nome, valor };
    setEntradas([...entradas, novoEntrada]);
  };

  const handleSaveQuantidade = (novoQuantidade: number) => {
    setQuantidade(novoQuantidade);
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
        <FormularioEntrada aoEntradaSubmetido={handleEntradaSubmetido} />
        <div className="listaentrada">
          <h4>Lista de Entradas:</h4>
          <button className="btn" onClick={handleToggleLista}>
            {listaExpandida ? "Esconder Lista" : "Mostrar Lista"}
          </button>
          <div>
            {listaExpandida && (
              <div>
                {entradas.map((entrada, index) => (
                  <div key={index}>
                    {entrada.nome}: R$ {entrada.valor.toFixed(2)}
                    <button className="lista-btn" onClick={() => handleExcluirEntrada(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="quantidade-entrada">
          <NumberInput onSaveQuantidade={handleSaveQuantidade} />
          <h4>Quantidade de saída: {quantidade}</h4>
        </div>
        <div>
          <ExibirSomaEntrada somaEntrada={somaEntrada} />
        </div>
      </div>
    </section>
  );
}

export default Entrada;
