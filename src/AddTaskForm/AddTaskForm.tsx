import React from 'react';
interface IChange {
  onClickHandler: React.MouseEventHandler;
}

const AddTaskForm:React.FC<IChange> = props => {

  return (
    <div>
      <input type="text" />
      <button onClick={props.onClickHandler}>Add</button>
    </div>
  );
};

export default AddTaskForm;