const Country = ({ countryInfo }) => {
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
      <img src={countryInfo.flags.png}/>
    </div>
  )
}

export default Country