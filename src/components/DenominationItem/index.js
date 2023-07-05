// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, decreaseTotalAmount} = props
  const {value} = itemDetails

  const onAmount = () => {
    decreaseTotalAmount(value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
