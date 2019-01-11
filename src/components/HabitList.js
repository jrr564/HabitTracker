import React from "react";
import AddHabitForm from "./AddHabitForm";
import EditHabitForm from "./EditHabitForm";

class HabitList extends React.Component {
  render() {
    return (
      <div>
        <h1>HABITS!!</h1>
        {Object.keys(this.props.habits).map(key => (
          <EditHabitForm
            key={key}
            index={key}
            habit={this.props.habits[key]}
            updateHabit={this.props.updateHabit}
            deleteHabit={this.props.deleteHabit}
          />
        ))}
        <AddHabitForm addHabit={this.props.addHabit} />
        <button onClick={this.props.loadSampleHabits}>
          Load Sample Habits
        </button>
      </div>
    );
  }
}

export default HabitList;
