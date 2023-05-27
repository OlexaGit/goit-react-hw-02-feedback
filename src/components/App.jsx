import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
// import FeedbackOptions from './Feedback/Feedback';

export class App extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedbackGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  onLeaveFeedbackNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  onLeaveFeedbackBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  totalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
    // console.log(values);
  };
  render() {
    return (
      <div>
        <Section title="" />
        <button onClick={this.onLeaveFeedbackGood}>Good</button>
        <button onClick={this.onLeaveFeedbackNeutral}>Neutral</button>
        <button onClick={this.onLeaveFeedbackBad}>Bad</button>
        <h2>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalFeedback()}
        />
      </div>
    );
  }
}
