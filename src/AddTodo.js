import React from 'react';

class AddTodo extends React.Component {
  state = {
    text: ''
  }

  // A function that updates state needs to live in the same component as the state it updates
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleClick = () => {
    // At this point, I need to use my addTask function from App.js to add the task
    const newTask = this.state.text;

    // Maybe add validation? Should I be allowed to add this task?
    if (newTask.length > 0) {
      this.props.addTask(newTask);
      this.setState({
        text: ''
      });
    }
  }

  render () {
    return (
      <div>
        <label htmlFor="inputNewTodo">New Todo:</label>
        <input placeholder="Type your todo item" type="text" id="inputNewTodo" value={this.state.text} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default AddTodo;