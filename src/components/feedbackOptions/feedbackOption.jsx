import styles from './feedbackOption.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const goodFeedback = () => {
    const good = options.good + 1;
    onLeaveFeedback(prev => {
      return {
        ...prev,
        good,
      };
    });
  };

  const neutralFeedback = () => {
    const neutral = options.neutral + 1;
    onLeaveFeedback(prev => {
      return {
        ...prev,
        neutral,
      };
    });
  };

  const badFeedback = () => {
    const bad = options.bad + 1;
    onLeaveFeedback(prev => {
      return {
        ...prev,
        bad,
      };
    });
  };
  return (
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
  );
};

export default FeedbackOptions;
