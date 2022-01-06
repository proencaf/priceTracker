import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

//api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='coin-tracker'>
      <div className='coin-search'>
        <h1 className='coin-text'>Search crypto</h1>
      </div>
    </div>
  )
}

export default App
