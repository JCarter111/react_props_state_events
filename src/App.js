import React from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TaskCounter from './TaskCounter';
import Task from './Task';
import './App.css';

class App extends React.Component {
  state = {
    tasks: [
      {task: "Feed the dog", completed: true},
      {task: "Tidy", completed: false},
      {task: "Wash up", completed: true},
      {task: "Practice JS", completed: true},
    ],
  }

  addTask = (newTask) => {
    // Needs to add the new task (which will be a string) to our task list
    // this.state.tasks.push(newTask) <-- cannot do this

    // Make a fresh copy of the tasks array with slice
    const newTasks = this.state.tasks.slice();
    const taskObject = {task: newTask, completed: false};
    newTasks.push(taskObject);

    // Always use setState to update any part of the state which needs to change
    this.setState({
      tasks: newTasks
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
           <Header />
          </div>
          <div className="row">
            {/* Passing a reference to the addTask function so I can use it in AddTodo */}
            <AddTodo addTask={this.addTask} />
          </div>
          <div className="row">
            <TaskCounter count={this.state.tasks.length} />
          </div>
          <div className="row">
          <div className="container">
            {
              this.state.tasks.map(function (item, i) {
                return <Task key={i} task={item} />
              })
            }
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
