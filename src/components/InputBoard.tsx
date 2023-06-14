import styles from './InputBoard.module.css'
import {PlusCircle} from '@phosphor-icons/react'
export function InputBoard(){

    return(
        <div>
            <form className={styles.inputForm}>
                <input placeholder="Adicione uma nova tarefa"/>
                <button>
                    <span>Criar</span>
                    <PlusCircle size={20}/>

                </button>
            </form>
        </div>
    )
}