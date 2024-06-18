// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionObject, deleteTransaction} = props
  const {title, amount, type} = transactionObject

  const onDeleteTransaction = () => {
    deleteTransaction(transactionObject)
  }

  return (
    <li className="transaction-con">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-btn-img"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
