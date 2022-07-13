import { createContext,ReactNode,useEffect,useState,} from "react";
import { api } from "./services/api";


interface TransitionTableProps{
    id:number;
    title: string;
    amount:number;
    category:string
    type: string; 
    createdAt:string;

}

interface TransactionInput {
    title: string;
    amount:number;
    category:string
    type: string; 
}

interface TransactionsContextData{

transactions:TransitionTableProps[]; 
createTransaction: (transaction: TransactionInput) => void;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData);

export function TransactionProvider({children}: TransactionsProviderProps){

    const [transactions ,setTransactions] = useState<TransitionTableProps[]>([])
 
    useEffect (() =>{
      api.get('transactions')
      .then(response => setTransactions (response.data.transactions ))
    },[])
   

     function createTransaction(transaction: TransactionInput){
        
            api.post('/transactions', transaction)
          

     }



    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}