import { useState, useEffect } from 'react'

import phonebookService from './services/phonebook'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const [filter, setFilter] = useState('')
  var filteredList = filter
    ? persons.filter(person => { return person.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 })
    : persons

  const showMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => setMessage(null), 5000)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    const existingPerson = persons.find(p => p.name === personObject.name)

    if (persons.some(person => person.name === personObject.name)) {
      if (window.confirm(`${personObject.name} already exist, would you like to replace the phone number?`)) {
        phonebookService
          .update(existingPerson.id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : updatedPerson))
            showMessage(`${personObject.name} added to contacts`)
          })
      }
    } else {
      phonebookService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      showMessage(`${personObject.name} added to contacts`)
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Do you want to delete ${name}'s number?`)) {
      phonebookService.deletePerson(id)
        .then(() => {
          setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <form>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
      </form>
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <ul>
        {
          filteredList.map(person => (
            <Person
              key={person.id}
              person={person}
              deletePerson={() => { deletePerson(person.id, person.name) }}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default App