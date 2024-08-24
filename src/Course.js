export const Course = (props) => {
    return (
        <div>
            <h1 style={{color: props.course.status === 'Complate' && "green"}}>{props.course.name}</h1>
            <button onClick={() => props.handelRemoveCourse(props.course.id)} >X</button>
            <button onClick={() => props.handelComplateCourse(props.course.id)} >Complate Course</button>
        </div>
    )
}