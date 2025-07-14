import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticsLine = ({text, value, subtitle=""}) => <p>{text} {value} {subtitle}</p>

const Statistics = (props) => {
  if (props.all == 0) {
    return <p>No feedback given</p>
  } else {
    return (
      <div>
        <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text="Neutral" value={props.neutral}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        <StatisticsLine text="All" value={props.all}/>
        <StatisticsLine text="Average" value={props.average}/>
        <StatisticsLine text="Positive" value={props.positive} subtitle='%'/>
      </div>
    )
  }
}

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
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}/>
    </div>
  )
}

export default App