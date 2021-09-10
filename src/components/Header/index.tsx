import { useCallback, useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Button, customStyles, ModalContent } from './styles'

export function Header() {
  const [modalIsOpen, setIsOpen ] = useState(false)

  const openModal = useCallback(()=> {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(()=> {
    setIsOpen(false)
  }, [])

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <Button type="button" onClick={openModal}>
          Nova transação
        </Button>
        <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
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

        </Modal>
      </Content>
    </Container>
  )
}