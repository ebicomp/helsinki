const Header = (props) => {
  return <h1>{props.course}</h1>;
};
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => {
        return (
          <Part key={index} name={part.name} exercises={part.exercises}></Part>
        );
      })}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};
const Total = (props) => {
  let numberOfExercises = 0;
  props.parts.forEach((part) => {
    numberOfExercises += part.exercises;
  });
  return <p>Number of exercises {numberOfExercises}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
