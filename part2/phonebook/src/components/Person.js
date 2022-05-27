const Person = (props)=>{

    const {person , RemovePerson} = props;

    return <p key={person.name}>
    {person.name} {person.number}<button onClick={RemovePerson}>delete</button>
  </p>
}
export default Person;