import { useState } from 'react'


function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
function handleChange(e) {
  setForm({...form,[e.target.name]:e.target.value});
 


}

function handleSubmit(e) {
  // Stop browse refresh
  e.preventDefault()
  console.log("Register Data");
  console.log(form)
}

return (
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder='enter your name' name="name"  value={form.name} onChange={handleChange} />
     <br /><br />
    <input type="email" placeholder='enter your email' name="email" value={form.email} onChange={handleChange} /> <br /><br />
    <input type="password" placeholder='enter your password' name="password" value={form.password} onChange={handleChange} /> <br /><br />
    <input type="password" placeholder='enter your password' name="confirm" value={form.confirm} onChange={handleChange} /> <br /><br />

    {/* <h2> {email} {password} {confirm} </h2> */}
    <button type='sumit'> Register</button>
  </form>
)
}

export default App
