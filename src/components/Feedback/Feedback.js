import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

class FeedbackOptions extends Component {
  contactUsHandler = () => {
    console.log('Good');
  };
  render() {
    return (
      <div>
        <button onClick={this.contactUsHandler}>Good</button>
        <button onClick={this.contactUsHandler}>Neutral</button>
        <button onClick={this.contactUsHandler}>Bad</button>
      </div>
    );
  }
}
export default FeedbackOptions;
