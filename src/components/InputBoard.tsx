import styles from './InputBoard.module.css'

export function InputBoard(){

    return(
        <div>
            <form className={styles.inputForm}>
                <input placeholder="Teste"/>
                <button/>
            </form>
        </div>
    )
}