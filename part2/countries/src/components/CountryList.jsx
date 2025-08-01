const CountryList = ({ filteredList }) => {
  return (
    <div>
      {
        filteredList.map(c => (
          <p key={c}>{c}</p>
        ))
      }
    </div>
  )
}

export default CountryList