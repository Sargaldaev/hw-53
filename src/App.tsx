import React, {useState} from 'react';
import './App.css';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';

const App = () => {

  const startTasks: string[] = ['Buy Milk', 'Play Game', 'Read book'];

  const [tasks, setTasks] = useState<string[]>(startTasks);


  const addTask = () => {

    const input: HTMLInputElement = document.querySelector('input')!;
    const taskCopy: string[] = [...tasks];
    taskCopy.unshift(input.value);

    input.value = '';
    setTasks(taskCopy);
  };

  const deleteTask = (index: number) => {
    const taskCopy: string[] = [...tasks];
    taskCopy.splice(index, 1);

    setTasks(taskCopy);
  };

  return (
    <div className="App">

      <AddTaskForm onClickHandler={addTask}/>

      {tasks.map((task: string, index: number ) => {
        return <Task key={index} task={task} onClickHandler={() => deleteTask(index) }/>;
      })

      }
    </div>
  );
};
export default App;
