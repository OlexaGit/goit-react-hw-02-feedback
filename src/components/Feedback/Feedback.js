import React, { Component } from 'react';
// import Statistics from 'components/Statistics/Statistics';
// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

class FeedbackOptions extends Component {
  // static propTypes = {
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  // };
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  onLeaveFeedbackGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    console.log(this.state.good);
  };
  onLeaveFeedbackNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  onLeaveFeedbackBad = () => {
    // const { target } = event;
    // console.log(target);
    console.log(this.state.bad);
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  render() {
    return <div></div>;
  }
}
export default FeedbackOptions;
