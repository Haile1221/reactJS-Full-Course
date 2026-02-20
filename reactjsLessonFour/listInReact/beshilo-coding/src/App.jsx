import './App.css'
// Arrays
// const fruits = ["Apple", "Banana", "Mango", "Orrange"];
// arrays in jsx 
// const items = [<li key="1">One</li>, 
//                   <li key="2" > Two {3+6} </li>]
// Real World Data 
const lessons = [
  { id: "l1", title: "React Basic", duration: 45 },
  
    { id: "l3", title: "Nodejs Introduction", duration: 60 }, 
    { id: "l2", title: "Hooks Introduction", duration: 50 }
];


function App() {
const items = ["One ",  "Two", "Three"]

  return (
    <>
      <h1> hello lists </h1>
      {/* for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}   */}
      {/* wrong way we will use map */}
      {/* <ul> {fruits.map((fruit, index) => (
        <li key={index} > {fruit} </li>
        )
)} </ul> */}
 {/* arrays in jsx  */}
  {/* <ul> {items} </ul> */}
 <ul>
  {items.map((item, index)=>(
    <li key={index}>{item} </li>
  ))}
 </ul>
 {/*display  Real World Data  */}

 <ul>{lessons.map((lesson)=>(
  <li key={lesson.id}>{lesson.title} {lesson.duration}min</li>
 ))}</ul>

    </>
  )
}

export default App
