import React from "react";

class LogIn extends React.Component {
  myInput = React.createRef();
  myInput2 = React.createRef();

  goToSession = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const userId = this.myInput.current.value+this.myInput2.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/session/${userId}`);
  };
  render() {
    return (
      <form className="session-selector" onSubmit={this.goToSession}>
        <h2>Please Enter Your Name</h2>
        <input
          type="text"
          ref={this.myInput}
          required
        />
        <input
          type="text"
          ref={this.myInput2}
          required
        />
        <button type="submit">Log In →</button>
      </form>
    );
  }
}

export default LogIn;
