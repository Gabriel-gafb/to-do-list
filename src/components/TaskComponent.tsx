import styles from "./TaskComponent.module.css";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

interface CheckboxProps{
    id: string;
    content: string;
    onDelete: (id: string) => void;
}
const CheckboxComponent = ({id, content, onDelete}: CheckboxProps) => {
    
    const [isChecked, setIsChecked] = useState(false);
    const [styleTask, setStyleTask] = useState(styles.taskNotChecked);

  function handleIsChecked() {
    setIsChecked(!isChecked);
    if (!isChecked) setStyleTask(styles.taskChecked);
    else setStyleTask(styles.taskNotChecked);
  }
  return (
    <li className={styleTask} >
      <input type="checkbox" onChange={handleIsChecked} />

      <span>
        {content}
      </span>
      <div className={styles.topButton}>
        <button onMouseDown={() =>{onDelete(id)}}>
          <Trash size={20} />
        </button>
      </div>
    </li>
  );
};

export default CheckboxComponent;
