import { useState } from 'react'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90% of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition., not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refure to use x-rays or blood tests when diagnosing clients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [mostVotes, setMostVotes] = useState(0)

  const copy = [...votes]

  const getAnecdote = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const vote = () => {
    copy[selected] += 1
    setVotes(copy)
    const maxValue = Math.max(...copy)
    setMostVotes(copy.indexOf(maxValue))
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={getAnecdote}>Next anecdote</button>
      <button onClick={vote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>Has {votes[mostVotes]} votes</p>
    </div>
  )
}

export default App