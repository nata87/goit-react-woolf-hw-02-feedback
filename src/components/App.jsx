import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Please leave feedback</h1>
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <h2>Statistics</h2>
      <div>Good: {state.good}</div>
      <div>Neutral: {state.neutral}</div>
      <div>Bad: {state.bad}</div>
    </div>
  );
};
