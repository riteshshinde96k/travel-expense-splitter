import { useState } from "react";

function App() {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");

  const addMember = () => {
    if (name.trim() === "") return;
    setMembers([...members, name.trim()]);
    setName("");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-bold text-blue-600">Travel Expense Splitter</h1>

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Enter member name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
          />
          <button
            onClick={addMember}
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul >
          {members.map((m, index) => (
            <li key={index} >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
