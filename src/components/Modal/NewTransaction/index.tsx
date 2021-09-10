import ReactModal from 'react-modal';
import { ModalContent, customStyles } from './styles'
import incomeImg from '../../../assets/income.svg'
import outcomeImg from '../../../assets/outcome.svg'

ReactModal.setAppElement("#root");

type NewTransactionProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransaction({ isOpen, onRequestClose }: NewTransactionProps) {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Adicionar nova transação"
    >
      <ModalContent>
        <h1>Cadastrar transação</h1>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Preço" />

        <div className="buttonBox">
          <button>
            <img src={incomeImg} alt="Entrada logo" />
            Entrada
          </button>
          <button>
            <img src={outcomeImg} alt="Saída logo" />
            Saída
          </button>
        </div>
        <input type="text" placeholder='Categoria' />

        <button className="submit">
          Cadastrar
        </button>
      </ModalContent>

  </ReactModal>

  )
}
