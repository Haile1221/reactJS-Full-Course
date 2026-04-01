// function Student({ student }) {
//   return (<>
//   <h2>Name: {student.name} <br />
//     Age: {student.age} <br /> Gender: {student.gender} <br /> Department:{student.department}
//   </h2>
//   </> 
//   )
// }

// export default Student;

// // spread operator 
// function Student({name,age, gender, department }) {
//   return (<>
//   <h2>Name: {name} <br />
//     Age: {age} <br /> Gender: {gender} <br /> Department:{department}
//   </h2>
//   </> 
//   )
// }

// export default Student;

// Rest opertor ->using to collect the remaing props


function Student({name, ...rest }) {
  return (<>
  <h2>Name: {name} <br />
    Age: {rest.age} <br /> Gender: {rest.gender} <br /> Department:{rest.department}
  </h2>
  </> 
  )
}

export default Student;
