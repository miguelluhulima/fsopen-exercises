const Person = ({ person, deletePerson }) => {
  return (
    <li>
      <p>{person.name} {person.number} <button onClick={deletePerson}>Delete</button></p>
    </li>
  )
}

export default Person