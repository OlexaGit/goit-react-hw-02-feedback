import PropTypes from 'prop-types';
// import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map((item, index) => (
        <button key={index} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  key: PropTypes.number,
};
export default FeedbackOptions;
