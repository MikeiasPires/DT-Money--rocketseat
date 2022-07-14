import { Container } from "./style"
import { useTransactions } from "../../Hooks/useTransactions"



export function TrasitionTable(){

 const {transactions} = useTransactions();

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
            <td className={transaction.type}>{ 
            new Intl.NumberFormat('PT-BR',
            {
                style:'currency',
                currency: 'BRL',
            }).format(transaction.amount) }</td>
            <td>{transaction.category}</td>
            <td>{ new Intl.DateTimeFormat('PT-BR')
            .format(new Date(transaction.createdAt ))}
             </td>
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