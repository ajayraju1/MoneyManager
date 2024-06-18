import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,

    income: 0,
    expenses: 0,
    transactionsList: [],
  }

  onAddMoneyDetails = () => {
    const {income, expenses} = this.state

    const moneyDetailsList = [
      {
        id: uuidv4(),
        img:
          'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
        moneyType: 'Balance',
        money: income - expenses,
      },

      {
        id: uuidv4(),
        img:
          'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
        moneyType: 'Income',
        money: income,
      },

      {
        id: uuidv4(),
        img:
          'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
        moneyType: 'Expenses',
        money: expenses,
      },
    ]

    return moneyDetailsList.map(eachObj => (
      <MoneyDetails key={eachObj.id} moneyDetails={eachObj} />
    ))
  }

  onChangeStateTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeStateAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeStateType = event => {
    this.setState({type: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    let displaytext

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
      }))
      displaytext = 'Income'
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
      }))
      displaytext = 'Expenses'
    }

    const newTransactionObj = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displaytext,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransactionObj],
    }))

    this.setState({
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    })
  }

  deleteTransaction = transactionObject => {
    const {id, amount, type} = transactionObject

    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachObj => id !== eachObj.id,
      ),
    }))

    this.setState(prevState =>
      type === 'Income'
        ? {income: prevState.income - amount}
        : {expenses: prevState.expenses - amount},
    )
  }

  render() {
    const {title, amount, type, transactionsList} = this.state

    return (
      <div className="money-manager-bg-con">
        <div className="money-manager-bg-con2">
          <div className="money-manager-profile-con">
            <h1 className="money-manager-user-name">Hi, Ajay</h1>
            <p className="money-manager-user-msg">
              Welcome back to your{' '}
              <span className="highlighted-text">Money Manager</span>
            </p>
          </div>

          <ul className="money-details-bg-con">{this.onAddMoneyDetails()}</ul>

          <div className="money-transaction-history-con">
            <form
              className="money-transaction-form"
              onSubmit={this.onAddTransaction}
            >
              <h1 className="money-transaction-heading">Add Transaction</h1>
              <div className="label-inp-con">
                <label className="transaction-label" htmlFor="title">
                  TITLE
                </label>
                <input
                  onChange={this.onChangeStateTitle}
                  className="transaction-inp"
                  placeholder="TITLE"
                  id="title"
                  value={title}
                />
              </div>

              <div className="label-inp-con">
                <label className="transaction-label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  onChange={this.onChangeStateAmount}
                  className="transaction-inp"
                  placeholder="AMOUNT"
                  id="amount"
                  value={amount}
                />
              </div>

              <div className="label-inp-con">
                <label className="transaction-label" htmlFor="type">
                  TYPE
                </label>
                <select
                  onChange={this.onChangeStateType}
                  className="transaction-inp"
                  id="type"
                  value={type}
                >
                  {transactionTypeOptions.map(eachObj => (
                    <option key={eachObj.optionId} value={eachObj.optionId}>
                      {eachObj.displayText}
                    </option>
                  ))}
                </select>
              </div>

              <button className="transaction-add-btn" type="submit">
                Add
              </button>
            </form>

            <div className="money-transaction-form">
              <h1 className="money-transaction-heading">History</h1>

              <div className="money-transaction-con">
                <div className="money-transaction-heading-con">
                  <p className="money-transaction-top-heading">Title</p>
                  <p className="money-transaction-top-heading">Amount</p>
                  <p className="money-transaction-top-heading">Type</p>{' '}
                </div>
              </div>

              <ul className="money-transaction-bg-con">
                {transactionsList.map(obj => (
                  <TransactionItem
                    key={obj.id}
                    transactionObject={obj}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
