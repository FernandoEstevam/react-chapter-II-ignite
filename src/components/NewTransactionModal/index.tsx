import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api'
import { Container, TransactionsTypeContainer, RadioBox } from './styles'

interface NewTransacitonProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransacitonModal({ isOpen, onRequestClose}: NewTransacitonProps) {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [value, setValue] = useState(0)

  const [type, setType] =  useState('deposit')

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data)

  }
  
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
    <Container onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar transações</h2>
      <input 
        placeholder="Titulo"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type="number" 
        placeholder="Valor"
        value={value}
        onChange={event => setValue(Number(event.target.value))}
      />

      <TransactionsTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => {setType('deposit')}} 
          isActive={type === 'deposit'}
          activeColor="green"
        >
            <img src={incomeImg} alt="Entrada" />
            <span>
              Entrada
            </span>
        </RadioBox>

        <RadioBox 
          type="button"
          onClick={() => {setType('withdraw')}}   
          isActive={type === 'withdraw'}
          activeColor="red" 
        >
            <img src={outcomeImg} alt="Sáida" />
            <span>
              Saída
            </span>
        </RadioBox>
      </TransactionsTypeContainer>
      
      <input 
        placeholder="Categoria"
        value={category}
        onChange={event => setCategory(event.target.value)}
      />
      
      <button type="submit">Cadastrar</button>
      
    </Container>
    
  </Modal>
  )  
}

