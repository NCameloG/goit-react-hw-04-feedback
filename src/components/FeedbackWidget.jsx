import React, { useState, useEffect, useCallback } from 'react';

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = useCallback(() => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  }, [feedback]);

  const countPositiveFeedbackPercentage = useCallback(() => {
    const total = countTotalFeedback();
    const { good } = feedback;
    return total === 0 ? 0 : (good / total) * 100;
  }, [countTotalFeedback, feedback]);

  useEffect(() => {
    console.log('Total Feedback:', countTotalFeedback());
    console.log(
      'Positive Feedback Percentage:',
      countPositiveFeedbackPercentage().toFixed(2) + '%'
    );
  }, [feedback, countTotalFeedback, countPositiveFeedbackPercentage]);

  return (
    <div className="container">
      <h1>Feedback Widget</h1>
      <div className="button-container">
        <button className="button" onClick={() => handleFeedback('good')}>
          Good
        </button>
        <button className="button" onClick={() => handleFeedback('neutral')}>
          Neutral
        </button>
        <button className="button" onClick={() => handleFeedback('bad')}>
          Bad
        </button>
      </div>
      {countTotalFeedback() > 0 ? (
        <div className="statistics-container">
          <h2>Statistics</h2>
          <div className="statistics-item">Good: {feedback.good}</div>
          <div className="statistics-item">Neutral: {feedback.neutral}</div>
          <div className="statistics-item">Bad: {feedback.bad}</div>
          <div className="statistics-item">
            Total Feedback: {countTotalFeedback()}
          </div>
          <div className="statistics-item">
            Positive Feedback Percentage:{' '}
            {countPositiveFeedbackPercentage().toFixed(2)}%
          </div>
        </div>
      ) : (
        <p>No feedback given yet</p>
      )}
    </div>
  );
};

export default FeedbackWidget;