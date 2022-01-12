import { useEffect } from "react"
import { Qualification } from "./Qualification";
import { SkillsItem } from "./SkillsItem";
import { SkillsTitle } from "./SkillsTitle";

export const Skills = () => {

    useEffect(() => {
        const skillsContent = document.getElementsByClassName("skills__content"),
            skillsHeader = document.querySelectorAll(".skills__header");
        function toggleSkills() {
            let itemClass = this.parentNode.className;

            for (let i = 0; i < skillsContent.length; i++) {
                skillsContent[i].className = "skills__content skills__close";
            }
            if (itemClass === "skills__content skills__close") {
                this.parentNode.className = "skills__content skills__open";
            }
        }

        skillsHeader.forEach(item => {
            item.addEventListener("click", toggleSkills);
        })
    }, []);

    return (
        <section id="skills">
            <section className="skills section">
                <h2 className="section__title">Habilidades</h2>
                <span className="section__subtitle">Mi nivel técnico</span>

                <div className="skills__container container grid" data-aos="fade-right">
                    <div>
                        <div className="skills__content skills__open">
                            <SkillsTitle title="Backend" subtitle="Mi nivel de conocimiento en Backend" icon="uil uil-brackets-curly" />
                            <div className="skills__list grid">
                                <SkillsItem text="Java" percent="80" />
                                <SkillsItem text="Spring" percent="70" />
                                <SkillsItem text="Hibernate" percent="60" />
                                <SkillsItem text="JPA" percent="75" />
                                <SkillsItem text="Java Server Faces" percent="70" />
                                <SkillsItem text="PHP" percent="65" />
                                <SkillsItem text="Laravel" percent="45" />
                                <SkillsItem text="Node JS" percent="60" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Bases de Datos" subtitle="Conocimiento de Bases de Datos" icon="uil uil-database" />
                            <div className="skills__list grid">
                                <SkillsItem text="MySQL" percent="90" />
                                <SkillsItem text="Workbench" percent="80" />
                                <SkillsItem text="PostgreSQL" percent="70" />
                                <SkillsItem text="Firebase" percent="65" />
                                <SkillsItem text="MongoDB" percent="65" />
                                <SkillsItem text="SQL" percent="80" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Nube" subtitle="Mi conocimiento en la nube" icon="uil uil-cloud" />
                            <div className="skills__list grid">
                                <SkillsItem text="Azure" percent="70" />
                                <SkillsItem text="Google Cloud" percent="50" />
                                <SkillsItem text="AWS" percent="60" />
                                <SkillsItem text="Heroku" percent="65" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills__content skills__close">
                            <SkillsTitle title="Frontend" subtitle="Mis Habilidades de Frontend" icon="uil uil-desktop" />
                            <div className="skills__list grid">
                                <SkillsItem text="HTML" percent="90" />
                                <SkillsItem text="XHTML" percent="65" />
                                <SkillsItem text="CSS" percent="60" />
                                <SkillsItem text="SCSS" percent="55" />
                                <SkillsItem text="Javascript" percent="70" />
                                <SkillsItem text="Typescript" percent="65" />
                                <SkillsItem text="Bootstrap" percent="70" />
                                <SkillsItem text="PrimeFaces" percent="60" />
                                <SkillsItem text="React" percent="85" />
                                <SkillsItem text="Ionic" percent="50" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Otros" subtitle="Otras tecnologías que he usado" icon="uil uil-wrench" />
                            <div className="skills__list grid">
                                <SkillsItem text="Git y Github" percent="70" />
                                <SkillsItem text="Maven" percent="80" />
                                <SkillsItem text="NPM" percent="70" />
                                <SkillsItem text="Yarn" percent="70" />
                                <SkillsItem text="Composer" percent="50" />
                                <SkillsItem text="Postman" percent="85" />
                                <SkillsItem text="Docker" percent="65" />
                                <SkillsItem text="Linux" percent="70" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Qualification />
        </section>
    )
}
