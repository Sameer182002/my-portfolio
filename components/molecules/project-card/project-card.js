import Image from 'next/image';
import styles from './project-card.module.css'

export default function ProjectCard({
    icon,
    title = '',
    info ='',
    url ='',
    type=''
}){

    function handleClick(url=''){
        if(!url) return
        window.open(url, '_blank');
    }

    return(
        <div className={styles.mainWrapper} onClick={()=>handleClick(url)}>
            <div className={styles.logo}>
                {type == 'icon' && icon}
                {type == 'svg' && 
                    <div className={`${styles.svgImage} ${title == "FunctionUp University" && styles.fstLogo}`}>
                        <Image
                            src={icon}
                            alt='icon'
                            objectFit='fill'
                            layout='fill'
                        />
                    </div>
                }
            </div>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.info}>{info}</p>
            </div>
        </div>
    )
}