import React from 'react';

class TaskCounter extends React.Component {
  render() {
    return (
      <p>
        You have {this.props.count} tasks
      </p>
    );
  }
}

export default TaskCounter;
