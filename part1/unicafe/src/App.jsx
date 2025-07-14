import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Review = ({title, count}) => <p>{title} {count}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={addGood} text="Good"/>
      <Button onClick={addNeutral} text="Neutral"/>
      <Button onClick={addBad} text="Bad"/>
      <h1>Statistics</h1>
      <Review title="Good" count={good}/>
      <Review title="Neutral" count={neutral}/>
      <Review title="Bad" count={bad}/>
    </div>
  )
}

export default App