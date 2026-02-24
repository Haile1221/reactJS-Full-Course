// 3- Course List component 

function CourseList() {
  const Courses = ["HTML Basics", "CSS Fundamentals", "JavaScript Beginner", "React for Beginners"]
  return (
    <ul> {Courses.map((course, index) => (
      <li key={index}>{course}</li>
    ))}

    </ul>
  )
}

export default CourseList