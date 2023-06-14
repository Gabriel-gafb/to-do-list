import styles from './TaskBoard.module.css';

export function TaskBoard(){
    return (
        <div className={styles.taskList}>
            <div className={styles.infos}>
                <div>
                    <strong>Tarefas criadas</strong>
                    <span>5</span>
                </div>
                <div>
                    <strong> Concluidas</strong>
                    <span>2 de 5</span>
                </div>
            </div>
                <div className={styles.registeredTaskBoard}>
                    Teste
                    {/* <ul>
                        <li>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </li>
                        <li>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </li>
                        <li>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </li>
                        <li>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </li>
                        <li>
                        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                        </li>
                    </ul> */}
                </div>

        </div>
    )
}