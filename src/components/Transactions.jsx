import PropTypes from 'prop-types';
import { TrTable } from './Transactions.styled';
import { TdTabletHead } from './Transactions.styled';
import { TransactionHistoryTable } from './Transactions.styled';
import { ThTabletHead } from './Transactions.styled';
const TransactionHistory = ({ items}) =>
{
  
  return (
    <div className='border-radius: 5px;'>
      <TransactionHistoryTable>
        
      <thead>
     <tr>
        <ThTabletHead>Type</ThTabletHead>
       <ThTabletHead>Amount</ThTabletHead>
        <ThTabletHead>Currency</ThTabletHead>
     </tr>
      </thead>
        <tbody>  
 {items.map((transaction, index) => <TrTable key={transaction.id}>
      
        <TdTabletHead value={ Math.ceil(index/2)-index/2 }>{transaction.type}</TdTabletHead>
        <TdTabletHead value={ Math.ceil(index/2)-index/2 }>{transaction.amount}</TdTabletHead>
        <TdTabletHead value={ Math.ceil(index/2)-index/2 }>{transaction.currency}</TdTabletHead>
        </TrTable>
          
         )}         
        </tbody>
      </TransactionHistoryTable>
     </div>
         )
}

 
//index , transactionString: {  type, amount, currency }
export default TransactionHistory;
console.log(TransactionHistory)
TransactionHistory.propTypes = {
  transactionString: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }).isRequired,
}