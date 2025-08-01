import { useState, useEffect } from 'react'

import countriesServices from '../services/countries'

const Country = ({ countryInfo }) => {
  const [capitalWeather, setCapitalWeather] = useState(null)
  const [iconCode, setIconCode] = useState(null)

  useEffect(() => {
    if (countryInfo) {
      countriesServices.getWeather(countryInfo.capital)
        .then(data => {
          setCapitalWeather(data)
          setIconCode(data.weather[0].icon)
        })
    }
  }, [countryInfo])

  if (!countryInfo) return (<p>Fetching data...</p>)
  return (
    <div>
      <h1>{countryInfo.name.common}</h1>
      <p>Capital {countryInfo.capital}</p>
      <p>Area {countryInfo.area}</p>
      <h2>Languages</h2>
      <ul>
        {
          Object.values(countryInfo.languages).map(language => (
            <li key={language}>{language}</li>
          ))
        }
      </ul>
      <img src={countryInfo.flags.png} />
      <h2>Weather in {countryInfo.capital}</h2>
      {
        capitalWeather ? (
          <div>
            <p>Temperature {capitalWeather.main.temp} celcius</p>
            <img src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} />
            <p>Wind {capitalWeather.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Loading weather...</p>
        )
      }
    </div>
  )
}

export default Country