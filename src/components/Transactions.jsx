import PropTypes from 'prop-types';
import { TrTable } from './Transactions.styled';
import { TdTabletHead } from './Transactions.styled';

const TransactionHistory = ({ transactionString: {  id,type, amount, currency } }) =>
{
    return (
      <TrTable>
        <TdTabletHead>{type}</TdTabletHead>
        <TdTabletHead>{amount}</TdTabletHead>
        <TdTabletHead>{currency}</TdTabletHead>
      </TrTable>
         )
}
export default TransactionHistory;

TransactionHistory.propTypes = {
  transactionString: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }).isRequired,
}