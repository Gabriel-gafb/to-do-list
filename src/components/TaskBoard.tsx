import styles from './TaskBoard.module.css';
import {Trash} from '@phosphor-icons/react'
export function TaskBoard(){
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
                        <li>
                            <input type="checkbox" />

                            <span>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                            </span>
                            <div className={styles.topButton}>
                                <button>
                                    <Trash size={20}/>
                                </button>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                            </span>
                            <div className={styles.topButton}>
                                <button>
                                    <Trash size={20}/>
                                </button>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                            </span>
                            <div className={styles.topButton}>
                                <button>
                                    <Trash size={20}/>
                                </button>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                            </span>
                            <div className={styles.topButton}>
                                <button>
                                    <Trash size={20}/>
                                </button>
                            </div>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>
                                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                            </span>
                            <div className={styles.topButton}>
                                <button>
                                    <Trash size={20}/>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

        </div>
    )
}