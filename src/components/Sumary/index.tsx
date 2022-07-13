import { Container } from "./style"
import Up from '../../assets/income.svg'
import Outcomepng from '../../assets/outcome.svg'
import totalpng from '../../assets/total.svg'
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"
 

export function Sumary(){

   


  const {transactions} = useContext(TransactionsContext);
  console.log(transactions)
   
    return(
        <Container>
            <div>
               <header>
                <p>Entradas</p>
                <img src={Up} alt="subir" />
               </header>
               <strong>R$ 1000,00</strong>
             </div>

             <div>
               <header>
                <p>Saídas</p>
                <img src={Outcomepng} alt="saidas" />
               </header>
               <strong>R$ -1000,00</strong>
             </div>

             <div className="hingligth-background">
               <header>
                <p>Total</p>
                <img src={totalpng} alt="total" />
               </header>
               <strong>R$ 1000,00</strong>
             </div>

       </Container>
    )
}