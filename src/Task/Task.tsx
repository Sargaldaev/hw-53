import React from 'react';

interface ITask {
  task: string;
  onClickHandler: React.MouseEventHandler;
}

const Task: React.FC<ITask> = props => {
  return (
    <div className="task">
      <p>{props.task}</p>
      <button onClick={props.onClickHandler} className="btn-task">remove</button>
    </div>
  );
};

export default Task;