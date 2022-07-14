import { createContext,ReactNode,useContext,useEffect,useState, } from "react";
import { api } from "../services/api";


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
createTransaction: (transaction: TransactionInput) => Promise<void>;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData);

export function TransactionProvider({children}: TransactionsProviderProps){

    const [transactions ,setTransactions] = useState<TransitionTableProps[]>([])

    useEffect (() =>{
      api.get('transactions')
      .then(response => setTransactions (response.data.transactions ))
    },[])
   

    async  function createTransaction(TransactionInput: TransactionInput){
           const response = await api.post('/transactions', {
            ...TransactionInput, createdAt: new Date(),
           })
           
           const {transaction} = response.data;

           setTransactions([
            ...transactions,transaction
           ]);

     }



    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )

}


export function useTransactions(){

    const context = useContext(TransactionsContext);

    return context;

}