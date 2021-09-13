import {  FormEvent, useState } from 'react';
import ReactModal from 'react-modal';
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'
import { api } from '../../../services/api';

import { ModalContent, customStyles, RadioBox } from './styles'

ReactModal.setAppElement("#root");

type NewTransactionProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose }: NewTransactionProps) {
  const [type, setType] = useState('deposit')

  const [title, setTitle ] = useState('');
  const [amount, setAmount ] = useState(0);
  const [category, setCategory ] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      title,
      amount,
      type,
      category
    }

    await api.post('transactions', data)

    onRequestClose()

  }
  
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Adicionar nova transação"
    >
      <ModalContent onSubmit={handleSubmit}>
      <button
        type="button"
        className="close-button" 
        onClick={onRequestClose}
      >
        +
      </button>
        <h2>Cadastrar transação</h2>

        <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <div className="buttonBox">
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada logo" />
            Entrada
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída logo" />
            Saída
          </RadioBox>
        </div>

        <input 
          type="text" 
          placeholder='Categoria' 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button className="submit" type='submit'>
          Cadastrar
        </button>
      </ModalContent>

  </ReactModal>

  )
}
