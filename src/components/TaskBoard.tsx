import TaskComponent from './TaskComponent';
import styles from './TaskBoard.module.css';
import { TaskInfo } from '../App';

interface TaskBoardProps{
  tasks : TaskInfo[],
  onDelete: (id: string) => void;
}
export function TaskBoard({tasks, onDelete} : TaskBoardProps){

    return (
        <div className={styles.taskList}>
            <div className={styles.infos}>
                <div>
                    <strong className={styles.createTaskInfo}>Tarefas criadas</strong>
                    <span>5</span>
                </div>
                <div>
                    <strong className={styles.concludeTaskInfo}> Concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </div>
                <div className={styles.registeredTaskBoard}>
                    <ul>
                        {tasks.map(task => {
                            return (<TaskComponent key={task.id} id={task.id} content={task.content}  onDelete={onDelete}/>)
                        })}
                        
                    
                    </ul>
                </div>

        </div>
    )
}