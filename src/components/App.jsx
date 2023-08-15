import { Component } from "react";
import{Secnion,} from "./section/section";
import { FeedBackOptions } from "./feedbackoptions/feedbackoptions";
import { Statistics } from "./statistics/statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  }

  onLeaveFeedback = (type) => {
    this.setState(prevState => {
      return {
      [type]: prevState[type] + 1,
      // total: this.countTotalFeedback(),
      // positive: this.countPositiveFeedbackPercentage(),
      }
    })
  };

  // countTotalFeedback=()=>{
  //   this.setState(prevState => {
  //     return {
  //       total: prevState.good + prevState.neutral + prevState.bad
  //     }
  //   })
  // };
 

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => ({ positive: (prevState.good / prevState.total) * 100 }));
  // };
 
  countTotalFeedback = ()=>{
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;
  };

  render(){
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
    <Secnion title="Please leave feedback">
      <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback}/>
    </Secnion>
    <Secnion title="Statistics">
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalFeedback} positivePercentage={positiveFeedbackPercentage}/>
    </Secnion>
      </div>
    )
  }
}
