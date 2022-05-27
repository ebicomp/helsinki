import Person from './Person';
const Persons = (props) => {
  const {persons , setPersons} = props;  
    return persons.map((person) => (
       <Person key={person.id} person={person} setPersons={setPersons}/>
    ));
};
export default Persons;
