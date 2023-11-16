import React, { useState } from 'react';
import "./NumberInput.css"

interface InputProps {
  onSaveQuantidade: (number: number) => void;
}

const NumberInput: React.FC<InputProps> = ({ onSaveQuantidade }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!isNaN(Number(value))) {
      setInputValue(value);
    }
  };

  const handleSaveQuantidade = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedNumber = parseFloat(inputValue);
    if (!isNaN(parsedNumber)) {
      onSaveQuantidade(parsedNumber);
      setInputValue('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSaveQuantidade}>
      <div className='number-input'>
        <div>
          <label className="label" htmlFor="quantidade">Quant:</label>
          <input
            required
            type="text"
            id="quantidade"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button className="form-btn" type="submit">+</button>
      </div>
    </form>
  );
};

export default NumberInput;