const PersonForm = (props) => {
  return (
    <form onSubmit={props.addPerson}>
      <div>
        name:{" "}
        <input onChange={props.newNameChangeHandler} value={props.newName} />
      </div>
      <div>
        number:
        <input onChange={props.newNumberChageHandler} value={props.newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
