import { useEffect, useState } from 'react';
import styles from './sidebar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { options } from 'utils/constants';
import { scrollToSection } from 'utils/helper/helperFunctions';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function Sidebar(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const style = {
        fontSize : '2rem',
        color : "#135D66"
    }
    const iconByButton = {
        "Home" : <HomeOutlinedIcon sx={style}/>,
        "About" : <InfoOutlinedIcon sx={style}/>,
        "Projects" : <AssignmentOutlinedIcon sx={style}/>,
        "Contact" : <CallOutlinedIcon sx={style}/>,
    }

    useEffect(() => {
        if (window.innerWidth <1024) {
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

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (!isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    function handleScroll(path=''){
        setIsSidebarOpen(false)
        document.body.style.overflow = '';
        scrollToSection(path)
    }

    return(
        <header className={`${styles.mainWrapper} ${isSticky ? styles.sticky : ''}`}>
            <div className={styles.mobileNavToggle} onClick={toggleSidebar}>
                <MenuIcon sx={{fontSize:"2rem"}}/>
            </div>
            <nav className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <div className={styles.openSideBar}>
                    <div className={styles.closeBtn} onClick={toggleSidebar}>
                        <MenuOpenIcon sx={{fontSize:"2.4rem"}}/>
                    </div>
                    <div className={`section-padding ${styles.options}`}>
                        {options.map(({ title = '', url = '' }, index) => (
                            <div key={index} className={styles.iconAndText} onClick={()=>handleScroll(url)}>
                                {iconByButton?.[title]}
                                <p className={styles.optionItem}>{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}