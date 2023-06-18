import styles from './InputBoard.module.css'
import {PlusCircle} from '@phosphor-icons/react'
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TaskInfo } from '../App';


interface InputBoardProps{
    onInsert: (info: TaskInfo) => void;
}
export function InputBoard({onInsert}: InputBoardProps){

    const [taskContent, setTaskContent]= useState('')
    const isTaskContentEmpty = taskContent.length === 0;

    function handleTaskContentChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setTaskContent(event.target.value);
    }

    function handleNewTaskInvalid(event : InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity("Esse campo é obrigatório");
    }
    function handleSubmitForm(event: FormEvent){
        event.preventDefault();
        onInsert({id: uuid(), content:taskContent, isChecked: false})
        setTaskContent("")
    }
    return(
        <div>
            <form className={styles.inputForm} onSubmit={handleSubmitForm}>
                <input placeholder="Adicione uma nova tarefa" value={taskContent} onChange={handleTaskContentChange} onInvalid={handleNewTaskInvalid} required/>
                <button type='submit' disabled={isTaskContentEmpty}>
                    <span>Criar</span>
                    <PlusCircle size={20}/>

                </button>
            </form>
        </div>
    )
}