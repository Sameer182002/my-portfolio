import styles from './footer-section.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function FooterSection(){
    return(
        <section className={styles.mainWrapper}>
            <p>Developed With</p>
            <FavoriteIcon
                sx={{
                    color : "red"
                }}
            />
            <p>By Mr. Bajaj :) &copy; 2024</p>
        </section>
    )
}