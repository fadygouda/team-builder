import React, { useState } from 'react';
import './App.css';
import Form from "./Form"
import ListNames from "./ListNames"
function App() {

  const [teamNames, setTeamNames] = useState([{
    id: 1,
    name: "Fady Gouda",
    email: "fadygouda123@gmail.com",
    role: "student",
  }])
    

  const addNewName = info => {
    const newName = {
      id: Date.now(),
      name: info.name,
      email: info.email,
      role: info.role
    }
    setTeamNames([...teamNames, newName]);
  };

  return (
    <div>
      <Form addNewName={addNewName} />
      <ListNames teamNames={teamNames} />
    </div>
  );
}

export default App;
