import React, { useCallback, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import { NewTransaction } from './components/Modal'

import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model
  },


  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 400,
          createdAt: new Date('2021-01-01 09:00:00')
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'withdraw',
          category: 'Dev',
          amount: 100,
          createdAt: new Date('2021-01-05 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
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

