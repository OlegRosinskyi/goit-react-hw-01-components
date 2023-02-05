import PropTypes from 'prop-types';
import { TrTable } from './Transactions.styled';
import { TdTabletHead } from './Transactions.styled';

const TransactionHistory = ({ index , transactionString: {  type, amount, currency }}) =>
{
  
    return (
      <TrTable>
        <TdTabletHead value={ index }>{type}</TdTabletHead>
        <TdTabletHead value={ index }>{amount}</TdTabletHead>
        <TdTabletHead value={ index }>{currency}</TdTabletHead>
      </TrTable>
         )
}

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