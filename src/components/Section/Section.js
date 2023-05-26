import React, { Component } from 'react';
import FeedbackOptions from 'components/Feedback/Feedback';

class Section extends Component {
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions />
        <h2>Statistics</h2>
      </div>
    );
  }
}
export default Section;
