import React from "react";

class Habit extends React.Component {
  render() {
    const { habit, timeFrameNumber, timeFrameLength, habitCategory } = this.props.details;
    return (
      <ul >
        <h2 >I want to {habit} {timeFrameNumber} times per {timeFrameLength}  </h2>
        <h3>Category: {habitCategory}</h3>
      </ul>
    );
  }
}

export default Habit;