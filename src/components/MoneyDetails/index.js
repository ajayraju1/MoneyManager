// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {img, moneyType, money} = moneyDetails

  return (
    <li className={`money-details-bg bg-${moneyType}`}>
      <img
        src={img}
        className="money-details-img"
        alt={moneyType.toLowerCase()}
      />
      <div className="">
        <p className="money-details-heading">Your {moneyType}</p>
        <p
          className="money-details-money"
          data-testid={`${moneyType.toLowerCase()}Amount`}
        >
          Rs {money}
        </p>
      </div>
    </li>
  )
}

export default MoneyDetails
