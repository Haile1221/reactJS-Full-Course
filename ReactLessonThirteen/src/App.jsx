import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]
  );

  // api external data 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <div style={{ padding: "20px" }}>
      {/* Counter */}
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button> <br /> <br />
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      {/* users data  */}

      <ul>
        {users.map(user => (
          <li key={user.id}>name:{user.name} <br/> userName: {user.username} <br/>  Email: {user.email} and <br/>  Address:{user.address.street} </li>
        ))}
      </ul>

    </div>
  )
}

export default App