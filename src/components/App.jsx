import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
// import FeedbackOptions from './Feedback/Feedback';

export class App extends Component {
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
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
    // console.log(this.countTotalFeedback());
  };
  render() {
    return (
      <div>
        <Section title="" />
        <button onClick={this.onLeaveFeedbackGood}>Good</button>
        <button onClick={this.onLeaveFeedbackNeutral}>Neutral</button>
        <button onClick={this.onLeaveFeedbackBad}>Bad</button>
        <h2>Statistics</h2>
        <Notification message="There is no feedback" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
