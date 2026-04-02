import { useState } from 'react'
function App() {
  const [count, setCount] = useState(1)
  //    let count = 0;
  //    function Increase() {
  //     setCount(count + 1)
  //   //  count = count + 1;
  //    console.log(count)

  // }
  return (
    <>  <h1 style={{ color: "blue" }}> Counter: {count}</h1>
      <button style={{ background: "green", border: "none" }} onClick={() => setCount(count * 3)}> Increase </button>
      <br /> <br />
      <button style={{ background: "blue", border: "none" }} onClick={() => setCount(count - 1)}> Decrease </button>

       <br /> <br />
      <button style={{ background: "orange", border: "none" }} onClick={() => setCount(1)}> Reset </button>
    </>
  )
}

export default App
