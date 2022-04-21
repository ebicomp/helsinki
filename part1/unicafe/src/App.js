import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {
    setGood(good + 1);
  };
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  };
  const badHandler = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={goodHandler}>good</button>
        <button onClick={neutralHandler}>neutral</button>
        <button onClick={badHandler}>bad</button>
      </div>
      <h1>Statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
      </ul>
    </div>
  );
};

export default App;
