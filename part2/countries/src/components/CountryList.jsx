const CountryList = ({ filteredList, handleClick }) => {
  return (
    <div>
      {
        filteredList.map(c => (
          <p key={c}>{c} <button onClick={() => handleClick(c)}>Show</button></p>
        ))
      }
    </div>
  )
}

export default CountryList