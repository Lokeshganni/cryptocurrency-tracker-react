// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {dataItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = dataItem
  return (
    <li className="li-container">
      <div className="item-coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="item-crypto-list-para">{currencyName}</p>
      </div>
      <div className="item-usd-and-euro-card">
        <p className="item-para item-crypto-list-para">{usdValue}</p>
        <p className="item-para item-crypto-list-para">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
