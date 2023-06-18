import TaskComponent from "./TaskComponent";
import styles from "./TaskBoard.module.css";
import { TaskInfo } from "../App";
import { ClipboardText } from "@phosphor-icons/react";

interface TaskBoardProps {
  tasks: TaskInfo[];
  onCheckChange: (id: string) => void;
  onDelete: (id: string) => void;
}
export function TaskBoard({ tasks, onCheckChange, onDelete }: TaskBoardProps) {
  return (
    <div className={styles.taskList}>
      <div className={styles.infos}>
        <div>
          <strong className={styles.createTaskInfo}>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong className={styles.concludeTaskInfo}> Concluídas</strong>
          <span>
            {tasks.filter((task) => task.isChecked == true).length} de{" "}
            {tasks.length}
          </span>
        </div>
      </div>
      <div className={styles.registeredTaskBoard}>
        {tasks.length ===0 ? 
        <div className={styles.taskBoardEmpty}>
            <ClipboardText size={50}/>
            <strong> Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
        :
            <ul>
            {tasks.map((task) => {
            return (
                <TaskComponent
                key={task.id}
                task={task}
                onCheckedChange={onCheckChange}
                onDelete={onDelete}
                />
            );
            })}
        </ul>
    }

      </div>
    </div>
  );
}
