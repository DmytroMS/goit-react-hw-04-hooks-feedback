import react, { useState } from 'react';
import FeedBackOption from './Components/Feedback/FeedBackOption/FeedBackOption';
import Section from './Components/Section/Section';
import Notification from './Components/Notofication/Notification';
import Statistics from './Components/Statistics/Statistics';


function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 

  const onLeaveFeedback = value => {
    setState(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  };

  const  countTotalFeedBack = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

 const countPositiveFeedBack = () => {
    return Math.round((state.good / countTotalFeedBack()) * 100);
  };


  const values = Object.keys(state);
  const totalLikes = countTotalFeedBack();
  const { good, neutral, bad } = state;
  
    return (
      <div className="App">
        <Section title="Please, Leave your feedback">
          <FeedBackOption
            options={values}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {totalLikes === 0 ? (
          <Notification message="No feedback given" />) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalLikes}
            positiveFeedBack={countPositiveFeedBack()}
          ></Statistics>
        )}
      </div>
    );
}
export default App;
