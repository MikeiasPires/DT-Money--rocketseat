import Modal from "react-modal"
import {Container,SubmitButton,TransactionTypeContainer, RadioBox} from '../../components/NewTransactionModal/style'
import CloseImg from '../../assets/close.svg'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import { FormEvent, useState, useContext } from "react"
import {api} from '../../services/api'
import { TransactionsContext } from "../../TransactionsContext"


interface NewTransactionModal{
    isOpen:boolean;
    onRequestClose:()=>void;
}


export function TransactionModal({isOpen,onRequestClose}:NewTransactionModal){

   const [type, setType] = useState('deposit');
   const [title, setTitle] =useState('');
   const [amount,setAmount] = useState(0);
   const [category,setCategory] = useState('');
    
   const {createTransaction } =  useContext(TransactionsContext)


   function handleSetTypeDeposit(){
    setType('deposit')
   }
   function handleSetTypewithdrown(){
    setType('withdrown')
   }
    
   function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();
      
     
    createTransaction({
      title,
      amount,
      category,
      type
    })
  }

   
    return (
       
       <Modal 
       isOpen={isOpen}
       onRequestClose={onRequestClose}
       overlayClassName='react-modal-overlay'
       className='react-modal-content'> 

             <button type="button"
                  onClick={onRequestClose}
                    className='react-modal-close'
              > 
                <img src={CloseImg}   alt="fecha esse shiet" />
             </button>
              <Container onSubmit={handleCreateNewTransaction}>
                        <h2>Cadastrar translação</h2>
              
              <input placeholder="Titulo" 
              value={title}
              onChange={ event => setTitle (event.target.value) } />

              <input type='number'
               placeholder="valor"
               value={amount}
               onChange={ event => setAmount(Number(event.target.value)) }/>

            <TransactionTypeContainer>

                <RadioBox type="button"
                 onClick={handleSetTypeDeposit}
                 isActive={type === 'deposit'}
                 ActiveColors='green' >

                    <img src={Income} alt="Entrada" />

                        <span>Entrada</span>

                </RadioBox>

                <RadioBox type="button" 
                onClick={handleSetTypewithdrown}
                isActive={type === 'withdrown'}
                ActiveColors='red'>

                    <img src={Outcome} alt="Saida"  />

                        <span>Saida</span>

                </RadioBox>
            </TransactionTypeContainer>

              <input placeholder="Categoria"
              value={category}
              onChange={ event => setCategory(event.target.value) } />

             <SubmitButton type="submit">
                Cadastrar 
             </SubmitButton>
         
               </Container>
             </Modal>
    )
}