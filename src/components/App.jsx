import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from './Container.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleoptions = optionItem => {
    this.setState(prevState => ({
      [optionItem]: prevState[optionItem] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const persent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return persent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivPersantage = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={keys}
              onLeaveFeedback={this.hendleoptions}
            ></FeedbackOptions>
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivPersantage}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </Section>
        </Container>
      </div>
    );
  }
}
