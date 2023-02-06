import { useEffect } from "react"
import { Qualification } from "./Qualification";
import { SkillsItem } from "./SkillsItem";
import { SkillsTitle } from "./SkillsTitle";

export const img = require.context("../img/icons", true);

export const Skills = () => {

    useEffect(() => {
        const skillsContent = document.getElementsByClassName("skills__content"),
            skillsHeader = document.querySelectorAll(".skills__header");
        function toggleSkills() {
            let itemClass = this.parentNode.className;

            for (let i = 0; i < skillsContent.length; i++) {
                skillsContent[i].className = "skills__content skills__close";
                skillsContent[i].childNodes[1].className = "skills__list grid";
            }
            if (itemClass === "skills__content skills__close") {
                this.parentNode.className = "skills__content skills__open";
                this.parentNode.childNodes[1].className="skills__list grid animate__animated animate__fadeIn"
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
                            <SkillsTitle title="Backend" subtitle="Mis conocimientos de Back-end" icon="uil uil-brackets-curly" />
                            <div className="skills__list grid">
                                <SkillsItem text="Java" icon={img('./java.png')} />
                                <SkillsItem text="Node JS" icon={img('./node.png')} />
                                <SkillsItem text="PHP" icon={img('./php.png')} />
                                <SkillsItem text="Spring Boot" icon={img('./spring.png')} />
                                <SkillsItem text="Hibernate y JPA" icon={img('./hibernate.svg')} />
                                <SkillsItem text="Express JS" icon={img('./express.png')} />
                                <SkillsItem text="Laravel" icon={img('./laravel.png')} />
                                {/*<SkillsItem text="Mongoose" icon="https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png" />*/}
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Bases de Datos" subtitle="Conocimiento en bases de datos" icon="uil uil-database" />
                            <div className="skills__list grid">
                                <SkillsItem text="MySQL" icon={img('./mysql.png')} />
                                <SkillsItem text="MongoDB" icon={img('./mongo.png')} />
                                <SkillsItem text="Firestore" icon={img('./firestore.png')} />
                                <SkillsItem text="Workbench" icon={img('./workbench.png')} />
                                {/*<SkillsItem text="SQL" icon="https://cdn-icons-png.flaticon.com/512/337/337953.png" />*/}
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Nube" subtitle="Mi experiencia en la nube" icon="uil uil-cloud" />
                            <div className="skills__list grid">
                                <SkillsItem text="Azure" icon={img('./azure.png')} />
                                <SkillsItem text="Google Cloud" icon={img('./google.png')} />
                                <SkillsItem text="AWS" icon={img('./aws.jpg')} />
                                {/*<SkillsItem text="Heroku" icon="https://cdn.iconscout.com/icon/free/png-256/heroku-2752161-2284978.png" />*/}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills__content skills__close">
                            <SkillsTitle title="Frontend" subtitle="Mis habilidades de Front-end" icon="uil uil-desktop" />
                            <div className="skills__list grid">
                                <SkillsItem text="React" icon={img('./react.png')} />
                                <SkillsItem text="Angular" icon={img('./angular.png')} />
                                <SkillsItem text="HTML" icon={img('./html.png')} />
                                <SkillsItem text="CSS" icon={img('./css.png')} />
                                <SkillsItem text="Javascript" icon={img('./js.jpg')} />
                                <SkillsItem text="SCSS" icon={img('./sass.png')} />
                                <SkillsItem text="Bootstrap" icon={img('./bootstrap.png')} />
                                <SkillsItem text="Redux" icon={img('./redux.png')} />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Otros" subtitle="Otras tecnologías que he usado" icon="uil uil-wrench" />
                            <div className="skills__list grid">
                                <SkillsItem text="Git y Github" icon={img('./git.png')} />
                                <SkillsItem text="Maven" icon={img('./maven.png')} />
                                <SkillsItem text="Npm" icon={img('./npm.png')} />
                                <SkillsItem text="Yarn" icon={img('./yarn.png')} />
                                <SkillsItem text="Composer" icon={img('./composer.png')} />
                                <SkillsItem text="Postman" icon={img('./postman.png')} />
                                <SkillsItem text="Docker" icon={img('./docker.webp')} />
                                <SkillsItem text="Linux" icon={img('./linux.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Qualification />
        </section>
    )
}
