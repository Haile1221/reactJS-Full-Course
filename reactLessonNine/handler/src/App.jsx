

function App() {

 function handleColorChange() {
  console.log("Selected Color:", color);
 }

  // function handleClick() {
  //   alert("Button Clicked from react")
  // }

  return (
    <>
<button onClick={()=>handleColorChange("blue")}>Blue</button>
<button onClick={()=>handleColorChange("red")}>Red</button>
    {/* <button onClick={handleClick}>Click Me</button> */}
    </>
  )
}

export default App
