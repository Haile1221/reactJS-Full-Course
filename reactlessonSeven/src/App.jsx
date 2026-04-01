import StudentList from "./component/StudentList"
import { studentsGroup1, studentsGroup12 } from "./Data/studentsData"
// //Static component /before props
// function Student() {
//   return <h2>Haile</h2>
// }
//// props  and multiple props
// function Student(props) {
//   return <h2>Name: {props.name}
//  Age: {props.age} Gender: {props.gender} Department:{props.department}
//   </h2>
// }

// //Destrructuring 
// function Student({name, age, gender, department}) {
//   return <h2>Name: {name}
//  Age: {age} Gender: {gender} Department:{department}
//   </h2>
// }

//Passing Object as single Props
// function Student({ student }) {
//   return <h2>Name: {student.name}
//     Age: {student.age} Gender: {student.gender} Department:{student.department}
//   </h2>
// }

// Map
// function Student({ student }) {
//   return <h2>Name: {student.name} <br />
//     Age: {student.age} <br /> Gender: {student.gender} <br /> Department:{student.department}
//   </h2>
// }

// Component sepparation 
// Spread operator 

function App() {


  return (
    <>

   
    <h2>Group1 </h2>
     < StudentList students={studentsGroup1}/>
     <h2>Group 2</h2>
      < StudentList students={studentsGroup12}/>
      {/* Component sepparation */}
      {/* {students.map((s) => (
        <Student key={s.id} student={s} />
      ))} */}
      {/* using id  */}
      {/* index is good fo static if no deletion */}
      {/* {students.map((s, index) => (
        <Student key={index} student={s} />
      ))} */}

      {/* map */}

      {/* <Student student={haile} />
      <Student student={tsion} /> */}
      {/* Passing Object as single Props */}

      {/* <Student name="Tsion" age={5} gender="female" department="kg" /> */}
      {/* <Student name="Haile"  age ={30} gender="Male"  department="Softwae engineering"/>     
    
      <Student  name="Tsion" age ={5} gender="female"  department="kg"/> */}
    </>
  )
}

export default App
