const TransactionHistory = ({ transactionString:{transactionType,transactionAmount,transactionCurrency,transactionId}}) =>
{
    return (
      <tr>
        <td>{transactionType}</td>
        <td>{transactionAmount}</td>
        <td>{transactionCurrency}</td>
      </tr>
         )
}
export default TransactionHistory;