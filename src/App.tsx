import React, { useCallback, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer } from 'miragejs';
import { NewTransaction } from './components/Modal'

import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen ] = useState(false)

  const handleToOpenModal = useCallback(()=> {
    setIsNewTransactionOpen(true)
  }, [])

  const handleToCloseModal = useCallback(()=> {
    setIsNewTransactionOpen(false)
  }, [])

  return (
    <>
      <Header handleToOpenNewTrasanction={handleToOpenModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransaction
        isOpen={isNewTransactionOpen}
        onRequestClose={handleToCloseModal}
      />
    </>
  );
}

