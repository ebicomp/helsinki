const Filter = (props) => {
  return (
    <>
      filter shown with{" "}
      <input onChange={props.filterChangeHandler} value={props.filter} />
    </>
  );
};
export default Filter;
