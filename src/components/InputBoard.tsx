import styles from './InputBoard.module.css'
import {PlusCircle} from '@phosphor-icons/react'
import { FormEvent, ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TaskInfo } from '../App';


interface InputBoardProps{
    onInsert: (info: TaskInfo) => void;
}
export function InputBoard({onInsert}: InputBoardProps){

    const [taskContent, setTaskContent]= useState('')

    function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setTaskContent(event.target.value);
    }
    function handleSubmitForm(event: FormEvent){
        event.preventDefault();
        onInsert({id: uuid(), content:taskContent})
    }
    return(
        <div>
            <form className={styles.inputForm} onSubmit={handleSubmitForm}>
                <input placeholder="Adicione uma nova tarefa" onChange={handleTaskContentChange}/>
                <button>
                    <span>Criar</span>
                    <PlusCircle size={20}/>

                </button>
            </form>
        </div>
    )
}