import { Summary } from '../Summary'
import { TranssactionsTable } from '../TransactionsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TranssactionsTable />
    </Container>
  )
}