import { Header } from './components/Header'
import { InputBoard } from './components/InputBoard'
import { TaskBoard } from './components/TaskBoard'
// import { v4 as uuid } from 'uuid';
import { useState } from 'react';

import './global.css'

export interface TaskInfo{
  id: string,
  content: string
}

function App() {

  const [tasks, setTasks] = useState<TaskInfo[]>([]) ;

  function handleDeleteTask(id : string){
  
      const tasksWithoutDeletedOne = tasks.filter(task =>{
          return task.id !== id
      })
      setTasks(tasksWithoutDeletedOne)
}
  function handleInsert(taskData :TaskInfo){

    setTasks([...tasks, taskData])
  }
  return (
    <div>
      <Header/>
      <InputBoard onInsert={handleInsert}/>
      <TaskBoard tasks={tasks} onDelete={handleDeleteTask}/>
    </div>
    )
}

export default App
