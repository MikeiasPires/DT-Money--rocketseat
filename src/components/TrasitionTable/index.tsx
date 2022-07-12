import { useEffect,useState } from "react"
import { Container } from "./style"
import {api} from "../../services/api"

interface TransitionTableProps{
    id:number;
    title: string;
    amount:number;
    category:string
    type: string; 
    createdAt:string;

}




export function TrasitionTable(){
 
    const [transactions ,setTransactions] = useState<TransitionTableProps[]>([])
 
 useEffect (() =>{
   api.get('transactions')
   .then(response => setTransactions (response.data.transactions    ))
 },[])

    return(
        <Container>
<table>
    <thead>
        <tr>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
        </tr>
    </thead>
    <tbody>
       
        {transactions.map(transaction =>{
            return (
        <tr key={transaction.id}>
            <td >{transaction.title}</td>
            <td className={transaction.type}>{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.createdAt}</td>
        </tr>
            )
        })}

        <tr>
        <td >Desenvolvimento web</td>
        <td className="Deposit">R$ 500.00</td>
        <td>Desenvolvimento</td>
        <td>20/06/2022</td>
        </tr>
    </tbody>

</table>
    
        </Container>
    )
}