import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionsTypeContainer } from './styles'

interface NewTransacitonProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransacitonModal({ isOpen, onRequestClose}: NewTransacitonProps) {
  return (
  <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  > 
    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close">
      <img src={closeImg} alt="Fechar Modal" />
    </button>
    <Container>
      <h2>Cadastrar transações</h2>
      <input 
        placeholder="Titulo"
      />

      <input
        type="number" 
        placeholder="Valor"
      />

      <TransactionsTypeContainer>
        <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>
              Entrada
            </span>
        </button>
        <button type="button">
            <img src={outcomeImg} alt="Sáida" />
            <span>
              Saída
            </span>
        </button>
      </TransactionsTypeContainer>
      
      <input 
        placeholder="Categoria"
      />
      
      <button type="submit">Cadastrar</button>
      
    </Container>
    
  </Modal>
  )  
}
