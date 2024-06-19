// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  console.log(income, expenses)

  return (
    <div className="money-details-bg-con">
      <div className="money-details-bg bg-balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-img"
          alt="balance"
        />
        <div className="">
          <p className="money-details-heading">Your Balance</p>
          <p className="money-details-money" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>

      <div className="money-details-bg bg-income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-img"
          alt="income"
        />
        <div className="">
          <p className="money-details-heading">Your Income</p>
          <p className="money-details-money" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="money-details-bg bg-expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-img"
          alt="expenses"
        />
        <div className="">
          <p className="money-details-heading">Your Expenses</p>
          <p className="money-details-money" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
