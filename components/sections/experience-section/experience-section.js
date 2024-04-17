import ProgressBar from "@components/atoms/progress-bar/progress-bar";
import styles from "./experience-section.module.css"

export default function ExperienceSection() {

    const skills = [
        {title : 'HTML', percent : 99},
        {title : 'CSS', percent : 99},
        {title : 'Javascript', percent : 99},
        {title : 'ReactJS', percent : 99},
        {title : 'NextJS', percent : 88},
        {title : 'NodeJS', percent : 80},
        {title : 'ExpressJS', percent : 60},
        {title : 'MongoDB', percent : 75},
        {title : 'POSTMAN', percent : 80},
        {title : 'Git', percent : 70},
        {title : 'AWS EC2, S3, Lambda', percent : 60},
        {title : 'Docker Deployement', percent : 80},
        {title : 'Data Structures And Algorithms', percent : 75},
        {title : 'Appsmith', percent : 100},
    ]
    return (
        <section className={`section-padding ${styles.mainWrapper}` } id="about">
            <p>Why Choose Me</p>
            <p>My Expertise</p>
            <div>
                {
                    skills.map(({title='',percent=0},index)=>
                        <div key={index}>
                            <div className={styles.textWrapper}>
                                <p>{title}</p>
                                <p>{percent}%</p>
                            </div>
                            <ProgressBar maxPercent={percent}/>
                        </div>
                    )
                }
            </div>
        </section>
    )
}