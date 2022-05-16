import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.filter((p) => p.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersonObj = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newPersonObj));
  };
  const newNameChangeHandler = (event) => {
    setNewName(event.target.value);
  };
  const newNumberChageHandler = (event) => {
    setNewNumber(event.target.value);
  };
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };
  const filteredData = filter
    ? persons.filter((p) => p.name.toLowerCase() === filter.toLowerCase())
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={filterChangeHandler} value={filter} />
      <h2>Add a new </h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={newNameChangeHandler} value={newName} />
        </div>
        <div>
          phone: <input onChange={newNumberChageHandler} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredData.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
