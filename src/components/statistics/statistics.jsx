const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive Feedback: {percentage} %</div>
    </>
  );
};

export default Statistics;
