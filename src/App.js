import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Wynieść śmieci',
      day: 'Feb 5th 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Posprzątać ',
      day: 'Feb 5th 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'iść do sklepu',
      day: 'Feb 5th 2:30pm',
      reminder: false,
    },
  ]);

    // adding tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //dealate task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks)=>tasks.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
         )     )
  }



  return (
    <div className='container'>
      <Header title='Task tacker' onAdd={() => setShowAddTask(!showAddTask)} showAddTask={ showAddTask }/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'All done'}
      
    </div>
  );
}

export default App;
