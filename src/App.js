import react, { Component } from 'react';
import FeedBackOption from './Components/Feedback/FeedBackOption/FeedBackOption';
import Section from './Components/Section/Section';
import Notification from './Components/Notofication/Notification';
import Statistics from './Components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedBack = () => {
    return Math.round((this.state.good / this.countTotalFeedBack()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalLikes = this.countTotalFeedBack();
    const positiveFeedBack = this.countPositiveFeedBack();
    const values = Object.keys(this.state);
    return (
      <div className="App">
        <Section title="Please, Leave your feedback">
          <FeedBackOption
            options={values}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {totalLikes === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalLikes}
            positiveFeedBack={positiveFeedBack}
          ></Statistics>
        )}
      </div>
    );
  }
}

export default App;
