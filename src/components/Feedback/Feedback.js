// import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <>
      <button onClick={onLeaveFeedback}>Good</button>
      <button onClick={onLeaveFeedback}>test2</button>
      <button onClick={onLeaveFeedback}>test3</button>
    </>
  );
};
export default FeedbackOptions;
