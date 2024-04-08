import ProjectCard from '@components/molecules/project-card/project-card';
import styles from './projects-section.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import csLogo from "../../../public/svgs/csTransparentLogo.svg"
import fstLogo from "../../../public/svgs/fstLogo.svg"
import logo from "../../../public/svgs/only-logo.svg"
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LinkIcon from '@mui/icons-material/Link';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
export default function ProjectsSection(){
    const scrollContainerRef = useRef(null);
    const style = {
        fontSize:'2rem',
        color : "#ffffff"
    }
    const projectsData = [
        {
            title : 'Data Science Website',
            url : 'https://functionup.org/data-science',
            info : "Facilitates seamless registration for the Data Science bootcamp.",
            type : 'icon',
            icon : <AssessmentOutlinedIcon sx={style}/>
        },
        {
            title : 'FunctionUp University',
            url : 'https://www.functionupuniversity.com/',
            info : "The Platform for student admissions in our colleges.",
            type : 'svg',
            icon : logo
        },
        {
            title : 'CollegeShaala',
            url : 'https://collegeshaala.com/',
            info : 'Prepares students for JEE exams, providing valuable resources',
            type : 'svg' ,
            icon : csLogo
        },
        {
            title : 'Students Lab',
            url : 'https://fst-lab.functionup.org/login',
            info : 'Designed for note-taking, session management, and quiz/assignment submissions.',
            type : 'svg',
            icon : fstLogo
        },
        {
            title : 'Admin Panel',
            url : 'https://admin-panel.functionup.org/applications',
            info : 'Manages content release, uploads, and other website functionalities.',
            type : 'icon',
            icon : <AdminPanelSettingsIcon sx={style}/>
        },
        {
            title : 'Architecture Design',
            url : 'https://docs.google.com/document/d/1Yd9NR4qX5xCXiCsh-0z4GZB1Lq8pg5dret3-s5uiOro/edit?usp=sharing',
            info : 'Backend architecture designed for the saloon website, providing seamless functionality and performance.',
            type : 'icon',
            icon : <DeveloperModeIcon sx={style}/>

        },
        {
            title : 'URL Shortener',
            url : 'https://github.com/Sameer182002/FunctionUp-Projects/tree/project4/urlShortner/Sameer',
            info : 'Backend implementation of a URL shortener service for creating and managing shortened URLs.',
            type : 'icon',
            icon : <LinkIcon sx={style}/>
        },
        {
            title : 'Books Management',
            url : 'https://github.com/Sameer182002/FunctionUp-Projects/tree/project3/-BooksManagement/WithAwsBookCover',
            info : 'Backend implementation for managing books, including features such as adding, editing, searching and reviews for books.',
            type : 'icon',
            icon : <AutoStoriesOutlinedIcon sx={style}/>
        },
        {
            title : 'E-Commerce Management',
            url : 'https://github.com/Sameer182002/FunctionUp-Projects/tree/project5/productsManagement/Sameer',
            info : 'Backend implementation for managing products, orders, and customers.',
            type : 'icon',
            icon : <ShoppingBagOutlinedIcon sx={style}/>
        }
    ]

    const handleLeftScroll = () => {
        if (scrollContainerRef.current) {
            const currentPosition = scrollContainerRef.current.scrollLeft;
            const clientWidth = scrollContainerRef.current.clientWidth;
            const newPosition = currentPosition - clientWidth;
            
            scrollContainerRef.current.scrollTo({
                left: newPosition < 0 ? 0 : newPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleRightScroll = () => {
        if (scrollContainerRef.current) {
            const currentPosition = scrollContainerRef.current.scrollLeft;
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const clientWidth = scrollContainerRef.current.clientWidth;
            const newPosition = currentPosition + clientWidth;
            
            const maxPosition = scrollWidth - 0;

            scrollContainerRef.current.scrollTo({
                left: newPosition >= maxPosition ? 0 : newPosition,
                behavior: 'smooth'
            });
        }
    };

    return(
        <section className={`section-padding ${styles.mainWrapper}`} id='project'>
            <div className={styles.leftSection}>
                <p>Projects &</p>
                <p>My Work Highlights</p>
                <div className={styles.buttonsWrapper}>
                    <div onClick={()=>handleLeftScroll()}>
                        <ArrowBackIcon
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight:"600"
                            }}
                        />
                    </div>
                    <div onClick={()=>handleRightScroll()}>
                        <ArrowForwardIcon
                            sx={{
                                fontSize: "1.4rem",
                                color : "#fff",
                                fontWeight:"600"
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.rightSection} ref={scrollContainerRef} style={{ scrollSnapType: 'x mandatory' }}>
                {projectsData.map(({title='',info='',url='',icon='',type=''},index)=>
                    <div key={index} className={styles.projectCardContainer}>
                        <ProjectCard 
                            key={index} 
                            index={index} 
                            title={title} 
                            info={info} 
                            url={url}
                            icon={icon}
                            type={type}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}