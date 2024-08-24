import logo from './logo.svg';
import './App.css';
import { Course } from './Course';
import { useState } from 'react';

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [courseStatus, setCourseStatus] = useState("Open");
  const handelNewCourse = (event) => {
    setNewCourse(event.target.value);
  }
  const handelAddCourse = () => {
    let courseOBJ = {
      id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
      status: "open",
      name: newCourse
    }
    setCourseList([...courseList, courseOBJ]);
  }
  const handelRemoveCourse = (courseId) => {
    setCourseList(courseList.filter((course) => course.id !== courseId))
  }
  const handelComplateCourse = (courseId) => {
    let newCourseList = courseList.filter((course) => {
      if (course.id === courseId) {
        course.status = "Complate"
        return true
      }
      return true
    })
    setCourseList(newCourseList)
  }
  return (
    <div className="App">
      <div className='newCourse'>
        <input type='text' onChange={handelNewCourse} />
        <button onClick={handelAddCourse}>Add New Course</button>
      </div>
      <div className='courseList'>
        {
          courseList.map((course, index) => {
            return (
              <Course key={index} course={course} handelRemoveCourse={handelRemoveCourse} handelComplateCourse={handelComplateCourse} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
