import React from "react";


class AddHabitForm extends React.Component {
    habitRef = React.createRef();
    timeFrameNumberRef = React.createRef();
    timeFrameLengthRef = React.createRef();
    habitCategoryRef = React.createRef();
    
    createHabit = event => {
        // 1.  stop the form from submitting
        event.preventDefault();

        const habit = {
          habit: this.habitRef.current.value,
          timeFrameNumber: this.timeFrameNumberRef.current.value,
          timeFrameLength: this.timeFrameLengthRef.current.value,
          habitCategory: this.habitCategoryRef.current.value,

        };
        this.props.addHabit(habit);
        // refresh the form
        event.currentTarget.reset();
      };
    
    render() {
        return (
            <form onSubmit={this.createHabit}>
                <input name="habit" ref={this.habitRef} type="text" placeholder="Habit"/>
                <input name="timeFrameNumber" ref={this.timeFrameNumberRef} type="number" placeholder="Number of Times" min="1" max="1000"/>
                <select name="timeFrameLength" ref={this.timeFrameLengthRef}>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                </select>
                <select name="habitCategory" ref={this.habitCategoryRef}>
                    <option value="Mind">Mind</option>
                    <option value="body">Body</option>
                    <option value="soul">Soul</option>
                    <option value="professional">Professional</option>
                    <option value="relationship">Relationship</option>
                </select>
                <button type="submit">Add New Habit</button>
            </form>
        )

    }
}

export default AddHabitForm;