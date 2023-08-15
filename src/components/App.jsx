import { Component } from "react";
import{Secnion,} from "./section/section";
import { FeedBackOptions } from "./feedbackoptions/feedbackoptions";
import { Statistics } from "./statistics/statistics";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (type) => {
    this.setState(prevState => {
      return {
      [type]: prevState[type] + 1
      }
    })
  };

  render(){
    return (
      <div>
    <Secnion title="Please leave feedback">
      <FeedBackOptions onLeaveFeedback={this.onLeaveFeedback}/>
    </Secnion>
    <Secnion title="Statistics">
    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
    </Secnion>
      </div>
    )
  }
}
