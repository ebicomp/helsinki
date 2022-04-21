import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad, total, avg, positive } = props;
  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all {total}</li>
        <li>average {avg}</li>
        <li>positive {positive}%</li>
      </ul>
    </div>
  );
};

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

  const CalcTotal = () => {
    return good + neutral + bad;
  };
  const calcAvg = () => {
    const total = CalcTotal();
    if (total === 0) return 0;
    else return (good + -1 * bad) / total;
  };
  const calcPositive = () => {
    const total = CalcTotal();
    if (total === 0) return 0;
    else return (good / total) * 100;
  };
  const total = CalcTotal();
  const avg = calcAvg();
  const positive = calcPositive();

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={goodHandler}>good</button>
        <button onClick={neutralHandler}>neutral</button>
        <button onClick={badHandler}>bad</button>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={neutral}
        total={total}
        avg={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;
