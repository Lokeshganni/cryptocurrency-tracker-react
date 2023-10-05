// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {dataList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({dataList: formattedData, isLoading: false})
  }

  renderCryptoListPage = () => {
    const {dataList} = this.state
    return (
      <div className="crypto-list-main-container">
        <h1 className="crypto-list-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-list-image"
        />
        <ul className="ul-container">
          <li className="li-table-head-container">
            <div className="coin-type-container">
              <p className="crypto-list-para">Coin Type</p>
            </div>
            <div className="usd-and-euro-card">
              <p className="crypto-list-para para">USD</p>
              <p className="crypto-list-para para">EURO</p>
            </div>
          </li>
          {dataList.map(each => (
            <CryptocurrencyItem dataItem={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptoListPage()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
