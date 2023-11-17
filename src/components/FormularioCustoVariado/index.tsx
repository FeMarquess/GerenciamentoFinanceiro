import React, { useState } from "react";

interface FormularioCustoProps {
  aoCustoSubmetido: (nome: string, valor: number, quantidade: number) => void;
}

const FormularioCustoVariado: React.FC<FormularioCustoProps> = ({ aoCustoSubmetido }) => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState<string>("");

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setValor(value);
    }
  };

  const handleQuantidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setQuantidade(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valorNumero = parseFloat(valor);
    const quantidadeNumero = parseFloat(quantidade);
    if (!isNaN(valorNumero)) {
      aoCustoSubmetido(nome, valorNumero, quantidadeNumero);
      setNome("");
      setValor("");
      setQuantidade("");
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-entrada">
          <div>
            <label className="label" htmlFor="nome">Nome: </label>
            <input
              required
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="valor">Valor:</label>
            <input
              required
              type="string"
              id="valor"
              value={valor}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="label" htmlFor="quantidade">Quant: </label>
            <input
              required
              type="text"
              id="quantidade"
              value={quantidade}
              onChange={handleQuantidadeChange}
            />
          </div>
        </div>
        <button className="form-btn" type="submit">+</button>
      </form>
    </div>
  );
};

export default FormularioCustoVariado;