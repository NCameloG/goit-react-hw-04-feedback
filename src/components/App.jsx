import React from 'react';
import FeedbackWidget from './FeedbackWidget';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackWidget />
    </div>
  );
};

export default App;
