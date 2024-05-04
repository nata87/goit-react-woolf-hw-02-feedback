import { Component } from 'react';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>Total: {total}</div>
        {!!good && <div>Positive Feedback: {positivePercentage} %</div>}
      </>
    );
  }
}

export default Statistics;
