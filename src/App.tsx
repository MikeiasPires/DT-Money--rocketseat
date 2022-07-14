import { Dashbord } from "./components/Dashbord";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/NewTransactionModal/TransactionModal";
import { TransactionProvider } from "./Hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenTransactionNewModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionNewModal(){
    setIsNewTransactionModalOpen(false);
  }
  

  Modal.setAppElement('#root')
  
  return (
    <>
    <TransactionProvider>
     <Header onOpenNewTrasactionNewModal={handleOpenTransactionNewModal}/>
        <Dashbord/>

     <TransactionModal isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionNewModal}/>
    <GlobalStyle/>
    </TransactionProvider>
    </>
  );
}

export default App;
