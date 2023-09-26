const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ courseName }) => {
  console.log("Entered into Header - courseName : ", courseName)
  return <h1>{courseName}</h1>
}

const Content = ({ parts }) => {
  console.log("Entered into Content - parts : ", parts)
  return (
    <div>
    {parts.map((part) => (
      <p key={part.name}>{part.name} {part.exercises}</p>
    ))}
    </div>
  )
}

const Total = ({ parts }) => {
  console.log("Entered into Total - parts : ", parts)
  let total = 0;
  parts.map((part) => {
    total += part.exercises
  })
  return <p>Number of exercises {total}</p>
}

export default App