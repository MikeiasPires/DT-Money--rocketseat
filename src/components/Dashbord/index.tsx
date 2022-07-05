import { Sumary } from "../Sumary";
import { TrasitionTable } from "../TrasitionTable";
import { Container } from "./style";


export function Dashbord(){
    return(
       <Container>
            <Sumary/>
            <TrasitionTable/>
       </Container>
        )
}