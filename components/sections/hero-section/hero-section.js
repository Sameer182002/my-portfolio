import Button from "@components/atoms/button/button"
import styles from "./hero-section.module.css"
import ButtonV1 from "@components/atoms/button-v1/button-v1"
import Header from "@components/molecules/header/header"
import { useEffect, useState } from "react"
import Image from "next/image"
import myImg from '../../../public/png/myImg.png'
import { scrollToSection } from "utils/helper/helperFunctions"
const textArray = [
    "Full Stack Developer",
    "Backend Developer",
    "YouTube Teacher",
    "Frontend Developer"
];

export default function HeroSection(){
    const [textIndex, setTextIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const [typingAnimationClass, setTypingAnimationClass] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prevIndex => (prevIndex + 1) % textArray.length);
            setAnimationClass(styles.slideDown);
            setTimeout(() => {
                setAnimationClass('');
            }, 1000);
        }, 2000);

        setTimeout(() => {
            setTypingAnimationClass(styles.typing);
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='themeBgColor'>
            <Header/>
            <div className={`section-padding ${styles.mainWrapper}`} id="home">
                <div>
                    <p className={styles.subHeading}>{"Hi, I'm"}</p>
                    <p className={`${styles.name} ${typingAnimationClass}`}>Sameer Bajaj</p>
                    <p className={`${styles.position} ${animationClass}`}>{textArray[textIndex]}</p>
                    <p className={styles.info}>Transforming ideas into immersive digital solutions with the power of MERN stack expertise. Let's elevate your online presence together</p>

                    <div className={styles.buttonWrapper}>
                        <a href="/pdf/resume.pdf" download> 
                            <Button
                                text="Download CV"
                            />
                        </a>
                        <ButtonV1
                            text="Contact"
                            handleClick={()=>scrollToSection('#contact')}
                            
                        />
                    </div>
                </div>
                <picture className={styles.image}>
                    <Image
                        src={myImg}
                        alt="my image"
                        objectFit="fill"
                        layout="fill"
                    />
                </picture>
                
            </div>
        </section>
    )
}