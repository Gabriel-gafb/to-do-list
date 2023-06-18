import styles from "./TaskComponent.module.css";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import { TaskInfo } from "../App";

interface TaskProps{
    task: TaskInfo;
    onCheckedChange: (id: string) => void;
    onDelete: (id: string) => void;
}
const TaskComponent = ({task, onCheckedChange, onDelete}: TaskProps) => {
    
  const [styleTask, setStyleTask] = useState(styles.taskNotChecked);

  function handleIsCheckedChange() {
    onCheckedChange(task.id)
    if (!task.isChecked) 
      setStyleTask(styles.taskChecked);
    else 
      setStyleTask(styles.taskNotChecked);
  }
  return (
    <li className={styleTask} >
      <input type="checkbox" onChange={handleIsCheckedChange} />

      <span>
        {task.content}
      </span>
      <div className={styles.topButton}>
        <button onMouseDown={() =>{onDelete(task.id)}}>
          <Trash size={20} />
        </button>
      </div>
    </li>
  );
};

export default TaskComponent;
