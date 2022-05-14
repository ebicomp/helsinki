const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <b>total of exercises {sum}</b>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);
const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    // console.log("what is happening", s, p);
    return s + p.exercises;
  }, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total}></Total>
    </div>
  );
};
export default Course;
