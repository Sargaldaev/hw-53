import React from 'react';

interface ITask {
  task: string;
  onClickHandler?: React.MouseEventHandler;
}

const Task: React.FC<ITask> = props => {
  return (
    <div>
      <p>{props.task}</p>
      <button onClick={props.onClickHandler}>delete</button>
    </div>
  );
};

export default Task;