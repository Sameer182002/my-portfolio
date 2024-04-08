import styles from "./button-v1.module.css"

export default function ButtonV1({
    text='Confirm',
    customStyle,
    handleClick
}){
    return(
        <button className={`${styles.mainWrapper} ${customStyle}`} onClick={()=>handleClick()}>
            {text}
        </button>
    )
}