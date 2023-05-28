// import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(item => (
        <button type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
export default FeedbackOptions;
