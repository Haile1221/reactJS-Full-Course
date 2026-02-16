import './App.css'
function Head() {
  return <h1> Welcome to Beshilo Coding Academy </h1>
}
function Body() {
  return <h1> Content </h1>
}
function Footer() {
  return <h1> Copyright issues and privacy policy </h1>
}
const course = "HTML, CSS and javaScript";
const academy = "Beshilo Coding Academy";
// rendering objects in jsx 
const student = {
  name: "Haile",
  department: "Software engineering"
}
// Calling funsctions in rendering in jsx
function greet(name) {
  return "Hello" + " " + name;
}
// Rendring Arrays in JSX
const skills = ["HTML", "CSS", "JavaScript", "ReactJS"]
// Why jsx is powerfull->ui and logic together

const isLoggedIn = false;


function App() {
  const isOnline = true;

  return (
    <>
    <p>Status : {isOnline ? "Online" : "Offline"} </p>
      <Head />
      <Body />
      <Footer/>
      <h2>{isLoggedIn ? "Welcome Back" : "Please Sign in ?"}</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h2> {greet("ReactJs")}</h2>
      <h2>The Student name is {student.name} and his department is {student.department} </h2>
      <h1> welcome to {course} prepared by {academy} and {3 + 9} </h1>
      <h2 className='title'>{7 + 3}</h2>
      {/* <button onClick={handleClick}>Submit</button> */}

    </>
  )
}

export default App
