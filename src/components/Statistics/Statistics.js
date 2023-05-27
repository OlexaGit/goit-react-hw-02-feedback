import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => {
  console.log(total);
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
    </ul>
  );
};

export default Statistics;
