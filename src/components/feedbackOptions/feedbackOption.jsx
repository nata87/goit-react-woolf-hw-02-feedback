import { Component } from 'react';
import styles from './feedbackOption.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, setFeedback } = this.props;
    return (
      <div className={styles.container}>
        {options.map(option => {
          return (
            <button
              className={styles.button}
              name={option}
              onClick={({ target }) => setFeedback(target.name)}
              key={option}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
