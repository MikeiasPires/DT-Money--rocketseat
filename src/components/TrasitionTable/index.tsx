import { useEffect } from "react"
import { Container } from "./style"
import {api} from "../../services/api"

export function TrasitionTable(){

 useEffect (() =>{
   api.get('transactions')
   .then(response => console.log(response.data))
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
        <tr>
        <td >Desenvolvimento web</td>
        <td className="Deposit">R$ 500.00</td>
        <td>Desenvolvimento</td>
        <td>20/06/2022</td>
        </tr>
        
        <tr>
        <td>Parachoque</td>
        <td className="witchrrow">R$ -200.00</td>
        <td>Carro</td>
        <td>24/07/2022</td>
        </tr>

        <tr>
        <td>Desenvolvimento web</td>
        <td>R$ 500.00</td>
        <td>Desenvolvimento</td>
        <td>20/06/2022</td>
        </tr>
    </tbody>

</table>
    
        </Container>
    )
}