import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Review = ({title, count, subtitle=""}) => <p>{title} {count} {subtitle}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good + neutral*0 + bad*(-1)) / all
  const positive = good / all * 100

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
      <Review title="All" count={all}/>
      <Review title="Average" count={average}/>
      <Review title="Positive" count={positive} subtitle='%'/>
    </div>
  )
}

export default App