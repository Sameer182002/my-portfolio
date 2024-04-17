import styles from "./home.module.css"
import HeroSection from "@components/sections/hero-section/hero-section";
import SkillsSection from "@components/sections/skills-section/skills-section";
import ExperienceSection from "@components/sections/experience-section/experience-section";
import ProjectsSection from "@components/sections/projects-section/projects-section";
import FooterSection from "@components/sections/footer-section/footer-section";
import ConnectWithMe from "@components/sections/connect-with-me/connect-with-me";

export default function HomePage(){
    return (
        <div className={styles.wrapper}>
            <HeroSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ExperienceSection/>
            <ConnectWithMe/>
            <FooterSection/>
        </div>
    )
}