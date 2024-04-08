import styles from "./header.module.css"
import Sidebar from "../sidebar/sidebar"
import { useEffect, useState } from "react";
import { options } from "utils/constants";
import { scrollToSection } from "utils/helper/helperFunctions";

export default function Header(){
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        if (window.innerWidth >= 1024) {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }
    }, []);

    function handleClick(path){
        setActiveSection(path)
        scrollToSection(path)
    }

    return (
        <header className={`${styles.mainWrapper} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.options}>
                {options.map(({title='',url=''},index) => 
                    <p key={index} onClick={()=>handleClick(url)} className={activeSection == url ? styles.active : ''}>
                        {title}
                    </p>
                )}
            </div>
            <Sidebar/>
        </header>
    )
}