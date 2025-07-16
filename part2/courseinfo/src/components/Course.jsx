import Header from './Header'
import Content from './Content'

const Course = (props) => {
    return (
        <div>
            <Header text={props.course.name} />
            <Content course={props.course} />
        </div>
    )
}

export default Course