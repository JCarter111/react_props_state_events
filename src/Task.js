import React from 'react';

class Task extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-6">
          {this.props.task.task}
        </div>
        <div className="col-3">
          {this.props.task.completed ? <button>Well done! Now Remove</button> : <button>Complete</button>}
        </div>
        <div className="col-3">
          {/* Conditional Rendering depending on whether the task is completed */}
          {this.props.task.completed ? null : <button>Delete</button>}
        </div>
      </div>
    );
  }
}

export default Task;