import React from 'react';

interface IChange {
  onClickHandler: React.MouseEventHandler;
}

const AddTaskForm: React.FC<IChange> = props => {

  return (
    <div>
      <input type="text" className="form"/>
      <button onClick={props.onClickHandler} className="form-btn">Add</button>
    </div>
  );
};

export default AddTaskForm;