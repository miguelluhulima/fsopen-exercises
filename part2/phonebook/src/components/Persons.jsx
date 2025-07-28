const Persons = ({ filteredList }) => {
  return (
    filteredList.map(person => {
      return (
        <div key={person.id}>
          <p>{person.name}</p>
          <p>{person.number}</p>
        </div>
      )
    })
  )
}

export default Persons