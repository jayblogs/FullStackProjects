import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClick = (feedbackvalue) => {
    console.log("Clicked button: ", feedbackvalue)

    switch (feedbackvalue) {
      case 'good':
        console.log()
        setGood(good + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      default:
        break;
    }

    let total = good + bad + neutral + 1
    setAverage(total / 3)
    if (feedbackvalue == 'good') setPositive((good + 1) * 100 / total)
    else setPositive(good * 100 / total)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button text='good' handleClick={() => handleClick('good')} />
        <Button text='neutral' handleClick={() => handleClick('neutral')} />
        <Button text='bad' handleClick={() => handleClick('bad')} />
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} />
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Statistics = ({ good, bad, neutral, average, positive }) => {
  let noValueString = 'no feedback given'

  return (
    <div>
      <h1>statistics</h1>

      {(!good && !bad && !neutral)
        ? <p>{noValueString}</p>
        : (
          <table>
            <tbody>
              <StatisticLine statname='good' statvalue={good} />
              <StatisticLine statname='neutral' statvalue={neutral} />
              <StatisticLine statname='bad' statvalue={bad} />
              <StatisticLine statname='average' statvalue={average} />
              <StatisticLine statname='positive' statvalue={positive} />
            </tbody>
          </table>
        )}
    </div>
  )
}

const StatisticLine = ({ statname, statvalue }) => {
  return (
    <tr>
      <td>{statname}</td>
      <td>{statvalue} {(statname == 'positive') && '%'}</td>
    </tr>
  )
}

export default App