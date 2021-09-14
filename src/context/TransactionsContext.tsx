import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionData {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<TransactionData, 'id'>

interface ContextDTO {
  transactions: TransactionData[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}


const TransactionsContext = createContext<ContextDTO>({} as ContextDTO)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get('transactions')
      console.log(data)
      setTransactions(data.transactions)
    }

    loadData()
  }, [])

  async function createTransaction(transaction: TransactionInput) {
    const { data } = await api.post('transactions', transaction)
    setTransactions([...transactions, data.transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(TransactionsContext)

  return context;
}