// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseTotalAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="cash-container">
        <div className="card-container">
          <div className="name-container">
            <button className="sara" type="button">
              S
            </button>
            <p className="name">Sara Williams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="heading">withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                itemDetails={eachItem}
                key={eachItem.id}
                decreaseTotalAmount={this.decreaseTotalAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
