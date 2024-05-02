import { useEffect } from 'react';
import { useState } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './feedbackOptions/feedbackOption';
import Section from './section/section';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  });

  const { good, neutral, bad, total, percentage } = state;

  useEffect(() => {
    const countTotalFeedback = () => {
      const total = good + neutral + bad;
      setState(prev => {
        return {
          ...prev,
          total,
        };
      });
    };
    const countPositiveFeedbackPercentage = () => {
      const percentage = Math.round((good / total) * 100, 2);
      setState(prev => {
        return {
          ...prev,
          percentage,
        };
      });
    };

    countTotalFeedback();
    if (total) countPositiveFeedbackPercentage();
  }, [good, neutral, bad, total]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={setState} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      </Section>
    </div>
  );
};
