const Total = (props) => {
  const total = props.parts.reduce((prev, current) => prev + current.exercises, 0)

  return (
    <h3>Total of {total} exercises</h3>
  )
}

export default Total