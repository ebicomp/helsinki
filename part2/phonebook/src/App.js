import { useEffect, useState } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");


  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    });

  } , []);


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
      <Filter filterChangeHandler={filterChangeHandler} filter={filter} />
      <h3>Add a new </h3>
      <PersonForm
        addPerson={addPerson}
        newNameChangeHandler={newNameChangeHandler}
        newNumberChageHandler={newNumberChageHandler}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredData} />
    </div>
  );
};

export default App;
