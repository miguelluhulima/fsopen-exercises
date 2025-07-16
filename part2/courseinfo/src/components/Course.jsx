import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
  return (
    <>
      {
        props.courses.map(course =>
          <div key={course.id}>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
          </div>
        )
      }  
    </>
  )
}

export default Course