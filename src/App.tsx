import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

const App = () => {

  const startTasks: string[] = ['Buy Milk', 'Play Game', 'Read book'];

  const [tasks, setTasks] = useState<string[]>(startTasks);


  const changeTask = () => {

    const input: HTMLInputElement = document.querySelector('input')!;
    const taskCopy: string[] = [...tasks];
    taskCopy.unshift(input.value);

    setTasks(taskCopy);
  };

  return (
    <div className="App">

      <AddTaskForm  onClickHandler={changeTask}/>

      {tasks.map((task: string, index: number) => {
        return <Task task={task}/>;
      })

      }
    </div>
  );
};
export default App;
