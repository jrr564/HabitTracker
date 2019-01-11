import React from "react";
import HabitList from "./HabitList";
import Habit from "./Habit";
import sampleHabits from "../sample-habits";
import base from "../base";

class App extends React.Component {
  state = {
    habits: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    // first reinstate our localStorage

    this.ref = base.syncState(`${params.userId}/habits`, {
      context: this,
      state: "habits"
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  addHabit = habit => {
    // 1. Take a copy of the existing state
    const habits = { ...this.state.habits };
    // 2. Add our new habit to that habits variable
    habits[`habit${Date.now()}`] = habit;
    // 3. Set the new habit object to state
    this.setState({ habits });
  };

  updateHabit = (key, updatedHabit) => {
    // 1. Take a copy of the current state
    const habits = { ...this.state.habits };
    // 2. Update that state
    habits[key] = updatedHabit;
    // 3. Set that to state
    this.setState({ habits });
  };

  deleteHabit = key => {
    // 1. take a copy of state
    const habits = { ...this.state.habits };
    // 2. update the state
    habits[key] = null;
    // 3.  update state
    this.setState({ habits });
  };
  
  loadSampleHabits = () => {
    this.setState({ habits: sampleHabits });
  };

  render() {
    return (
      <div >
        <HabitList  addHabit={this.addHabit} updateHabit={this.updateHabit} deleteHabit={this.deleteHabit} loadSampleHabits={this.loadSampleHabits} habits={this.state.habits}/>
        <ul className="habits">
          {Object.keys(this.state.habits).map(key => (
            <Habit
              key={key}
              index={key}
              details={this.state.habits[key]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
