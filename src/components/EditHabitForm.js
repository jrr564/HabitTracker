import React from "react";

class EditHabitForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // 1. Take a copy of the curernt habit
    const updatedHabit = {
      ...this.props.habit,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateHabit(this.props.index, updatedHabit);
  };
  render() {
    return (
      <div>
        <input
          name="habit"
          type="text"
          onChange={this.handleChange}
          value={this.props.habit.habit}
        />
        <input
          name="timeFrameNumber"
          type="number"
          onChange={this.handleChange}
          value={this.props.habit.timeFrameNumber}
          min="1"
          max="1000"
        />
        <select
          onChange={this.handleChange}
          name="timeFrameLength"
          value={this.props.habit.timeFrameLength}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <select name="habitCategory" onChange={this.handleChange}>
          <option value="Mind">Mind</option>
          <option value="body">Body</option>
          <option value="soul">Soul</option>
          <option value="professional">Professional</option>
          <option value="relationship">Relationship</option>
        </select>
        <button onClick={() => this.props.deleteHabit(this.props.index)}>
          Remove Habit
        </button>
      </div>
    );
  }
}

export default EditHabitForm;
