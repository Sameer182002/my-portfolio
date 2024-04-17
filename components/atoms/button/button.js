import styles from "./button.module.css"

export default function Button({
    text='Confirm',
    customStyle,
    handleClick=()=>{}
}){
    return(
        <button className={`${styles.mainWrapper} ${customStyle}`} onClick={()=>handleClick()}>
            {text}
        </button>
    )
}