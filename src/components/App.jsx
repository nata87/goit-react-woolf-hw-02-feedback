import { useEffect } from 'react';
import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  });

  const goodFeedback = () => {
    const good = state.good + 1;
    setState(prev => {
      return {
        ...prev,
        good,
      };
    });
  };

  const neutralFeedback = () => {
    const neutral = state.neutral + 1;
    setState(prev => {
      return {
        ...prev,
        neutral,
      };
    });
  };

  const badFeedback = () => {
    const bad = state.bad + 1;
    setState(prev => {
      return {
        ...prev,
        bad,
      };
    });
  };

  const countTotalFeedback = () => {
    const total = state.good + state.neutral + state.bad;
    setState(prev => {
      return {
        ...prev,
        total,
      };
    });
  };
  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((state.good / state.total) * 100, 2);
    setState(prev => {
      return {
        ...prev,
        percentage,
      };
    });
  };

  useEffect(() => {
    countTotalFeedback();
    if (state.total) countPositiveFeedbackPercentage();
  }, [state.good, state.neutral, state.bad]);

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
      <div className={styles.container}>
        <button className={styles.button} onClick={goodFeedback}>
          Good
        </button>
        <button className={styles.button} onClick={neutralFeedback}>
          Neutral
        </button>
        <button className={styles.button} onClick={badFeedback}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      <div>Good: {state.good}</div>
      <div>Neutral: {state.neutral}</div>
      <div>Bad: {state.bad}</div>
      <div>Total: {state.total}</div>
      <div>Positive Feedback: {state.percentage} %</div>
    </div>
  );
};
