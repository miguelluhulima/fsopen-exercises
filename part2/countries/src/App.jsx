import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

import countriesService from './services/countries'

import Country from './components/Country'
import CountryList from './components/CountryList'

const App = () => {
  const [value, setValue] = useState('')
  const [country, setCountry] = useState(null)
  const [countryInfo, setCountryInfo] = useState(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService
      .getQuery('all')
      .then(data => {
        const list = data.map(c => c.name.common)
        setCountries(list)
      })
  }, [])

  useEffect(() => {
    if (country) {
      console.log(`fetching country: ${country}`)
      countriesService.getQuery(`name/${country}`)
        .then(data => setCountryInfo(data))
    }
  }, [country])

  const filteredList = useMemo(() => {
    return value
      ? countries.filter(c => c.toLowerCase().includes(value.toLowerCase()))
      : countries
  }, [value, countries])

  useEffect(() => {
    if (filteredList.length === 1) setCountry(filteredList[0])
    else setCountry(null)
  }, [filteredList])

  const handleFilterChange = (event) => setValue(event.target.value)

  const handleClick = (name) => setCountry(name)

  return (
    <div>
      <form>
        <p>find countries <input value={value} onChange={handleFilterChange} /></p>
      </form>
      {
        value === '' ? <p>Search a country</p>
          : filteredList.length > 10 ? <p>Too many matches</p>
            : country !== null ? <Country countryInfo={countryInfo} />
              : <CountryList filteredList={filteredList} handleClick={handleClick} />
      }
    </div>
  )
}


export default App