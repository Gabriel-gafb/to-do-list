import { Header } from "./components/Header";
import { InputBoard } from "./components/InputBoard";
import { TaskBoard } from "./components/TaskBoard";
import { useState } from "react";

import "./global.css";

export interface TaskInfo {
  id: string;
  content: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(tasksWithoutDeletedOne);
  }
  function handleInsert(taskData: TaskInfo) {
    setTasks([...tasks, taskData]);
  }
  function handleCheckChange(id: string) {
    const editedTasks = tasks.map((task) => {
      const editingTask = { ...task };
      if (task.id === id) editingTask.isChecked = !task.isChecked;

      return editingTask;
    });
    setTasks(editedTasks);
  }
  return (
    <div>
      <Header />
      <InputBoard onInsert={handleInsert} />
      <TaskBoard
        tasks={tasks}
        onCheckChange={handleCheckChange}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
