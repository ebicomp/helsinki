import { useState } from "react";

const Statistics = (props) => {
  const { good, neutral, bad, total, avg, positive } = props;
  if (total === 0) return <p>No feedback given</p>;
  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={total} />
          <StatisticLine text="avg" value={avg} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};
const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Button = (props) => {
  const { text, onClickHandler } = props;
  return <button onClick={onClickHandler}>{text}</button>;
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
        <Button onClickHandler={goodHandler} text="good"></Button>
        <Button onClickHandler={neutralHandler} text="neutral"></Button>
        <Button onClickHandler={badHandler} text="bad"></Button>
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
