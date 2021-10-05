import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

export function TransactionsTable() {

  const transactions = useContext(TransactionsContext)

  function formatAmount(value: number) {
    return  new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  function formatDate(date: string) {
    return  new Intl.DateTimeFormat('pt-BR').format(
      new Date(date)
    )
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {
                  transaction.type === 'withdraw' 
                  ? '-' + formatAmount(transaction.amount) 
                  : formatAmount(transaction.amount)
                }
                </td>
              <td>{transaction.category}</td>
              <td>
              {formatDate(transaction.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}