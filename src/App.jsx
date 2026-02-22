import { useState } from "react";

function App() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");

  const addMember = () => {
    if (name === "") return;
    setMembers([...members, name]);
    setName("");
  };

  return (
    <div>
      <h1>Travel Expense Splitter</h1>

      <input
        type="text"
        placeholder="Enter member name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addMember}>Add Member</button>

      <ul>
        {members.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
