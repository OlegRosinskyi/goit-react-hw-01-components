import PropTypes from 'prop-types';
const TransactionHistory = ({ transactionString: {  id,type, amount, currency } }) =>
{
    return (
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
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