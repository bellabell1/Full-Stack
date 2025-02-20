import React, { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};


const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback > 0 ? (good - bad) / totalFeedback : 0;
  const positivePercentage = totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={totalFeedback} />
          <StatisticLine text="Average" value={averageScore.toFixed(1)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(1)}%`} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => handleFeedback('good')} text="Good" />
      <Button onClick={() => handleFeedback('neutral')} text="Neutral" />
      <Button onClick={() => handleFeedback('bad')} text="Bad" />
      {totalFeedback > 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

export default App;

