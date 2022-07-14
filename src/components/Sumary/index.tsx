import { Container } from "./style"
import Up from '../../assets/income.svg'
import Outcomepng from '../../assets/outcome.svg'
import totalpng from '../../assets/total.svg'
import { useTransactions } from "../../Hooks/useTransactions"
 

export function Sumary(){

   


  const {transactions} = useTransactions();

  const sumary = transactions.reduce((acc,transaction) => {
   if (transaction.type === 'deposit'){
    acc.deposit += transaction.amount;
    acc.total += transaction.amount;
   }else{
    acc.withdraws += transaction.amount;
    acc.total -= transaction.amount;
   }
   return acc;

  },{
  deposit: 0,
  withdraws:0,
  total: 0,
}
  )
  

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Up} alt="subir" />
        </header>
        <strong>R$ {
          new Intl.NumberFormat('PT-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.deposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={Outcomepng} alt="saidas" />
        </header>
        <strong>R$ - {
          new Intl.NumberFormat('PT-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.withdraws)}</strong>
      </div>

      <div className="hingligth-background">
        <header>
          <p>Total</p>
          <img src={totalpng} alt="total" />
        </header>
        <strong>R$ {
          new Intl.NumberFormat('PT-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }).format(sumary.total)}
        </strong>
      </div>

       </Container>
    )
}