import styles from "./home.module.css"
import HeroSection from "@components/sections/hero-section/hero-section";
import SkillsSection from "@components/sections/skills-section/skills-section";
import ExperienceSection from "@components/sections/experience-section/experience-section";
import ProjectsSection from "@components/sections/projects-section/projects-section";
import FooterSection from "@components/sections/footer-section/footer-section";
import ConnectWithMe from "@components/sections/connect-with-me/connect-with-me";
import { useState } from "react";

export default function HomePage(){
    const [position, setPosition] = useState({x: 0,y: 0});
    return (
        <div className={styles.wrapper} onPointerMove={(e)=>{
            setPosition({
                x : e.clientX,
                y: e.clientY
            })
        }}>
            <HeroSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <ConnectWithMe/>
            <FooterSection/>
            <div className={styles.circle} style={{ left: position.x, top: position.y }}></div>
        </div>
    )
}