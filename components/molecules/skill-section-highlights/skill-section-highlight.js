import styles from './skill-section-highlight.module.css'
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { scrollToSection } from 'utils/helper/helperFunctions';

export default function SkillSectionHighlights(){
    const iconStyle = {
        fontSize: '1.4rem',
        color : '#fff'
    }
    const details = [
        {
            title : '2 Years Job',
            subheading : 'Experience',
            image : <WorkIcon sx={iconStyle}/>,
            id : '#about'
        },
        {
            title : 'Multiple Projects',
            subheading : 'Completed',
            image : <AssignmentIcon sx={iconStyle}/>,
            id : '#project'
        },
        {
            title : 'Online 24/7',
            subheading : 'Support',
            image : <HeadsetMicIcon sx={iconStyle}/>,
            id : '#contact'
        },
        
    ]
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.skillsWrapper}>
                {
                    details.map(({title='',subheading='',image='',id=''},index)=>
                    <>
                        <div key={index} className={styles.iconAndTextWrapper} onClick={()=>scrollToSection(id)}>
                            <div className={styles.icon}>
                                {image}
                            </div>
                            <div>
                                <p className={styles.title}>{title}</p>
                                <p className={styles.subHeading}>{subheading}</p>
                            </div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </>
                    )
                }
            </div>
        </div>
    )
}