// import React from 'react'
// import Student from './Student'

// function StudentList({students}) {
//   return (
//     <>
//         {students.map((s) => (
//         <Student key={s.id} student={s} />
//       ))}
//     </>
//   )
// }

// export default StudentList

// spread operator 
import React from 'react'
import Student from './Student'

function StudentList({students}) {
  return (
    <>
        {students.map((s) => (
        <Student key={s.id} {...s} />
      ))}
    </>
  )
}

export default StudentList