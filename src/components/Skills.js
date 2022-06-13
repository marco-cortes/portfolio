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
                                <SkillsItem text="Java" icon="https://img.icons8.com/color/48/undefined/java-coffee-cup-logo--v1.png" />
                                <SkillsItem text="Spring Boot" icon="https://img.icons8.com/color/48/undefined/spring-logo.png" />
                                <SkillsItem text="Hibernate y JPA" icon="https://hibernate.org/images/hibernate_icon_whitebkg.svg" />
                                <SkillsItem text="Node JS" icon="https://electrokoding.com/img/node.png" />
                                <SkillsItem text="Express JS" icon="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" />
                                <SkillsItem text="Mongoose" icon="https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png" />
                                <SkillsItem text="PHP" icon="https://cdn-icons-png.flaticon.com/512/919/919830.png" />
                                <SkillsItem text="Laravel" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Bases de Datos" subtitle="Conocimiento en bases de datos" icon="uil uil-database" />
                            <div className="skills__list grid">
                                <SkillsItem text="MySQL" icon="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" />
                                <SkillsItem text="MongoDB" icon="https://res.cloudinary.com/geopois/image/upload/v1629281092/logos/mongodb_zqggua.png" />
                                <SkillsItem text="Firestore" icon="https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png" />
                                <SkillsItem text="Workbench" icon="https://dashboard.snapcraft.io/site_media/appmedia/2020/04/mysql-workbench.png" />
                                <SkillsItem text="SQL" icon="https://cdn-icons-png.flaticon.com/512/337/337953.png" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Nube" subtitle="Mi experiencia en la nube" icon="uil uil-cloud" />
                            <div className="skills__list grid">
                                <SkillsItem text="Azure" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" />
                                <SkillsItem text="Google Cloud" icon="https://www.sophos.com/sites/default/files/2022-02/googlecloud.png" />
                                <SkillsItem text="AWS" icon="https://pbs.twimg.com/profile_images/1377340526890872832/Qvi0U8pF_400x400.jpg" />
                                <SkillsItem text="Heroku" icon="https://cdn.iconscout.com/icon/free/png-256/heroku-2752161-2284978.png" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="skills__content skills__close">
                            <SkillsTitle title="Frontend" subtitle="Mis habilidades de Front-end" icon="uil uil-desktop" />
                            <div className="skills__list grid">
                                <SkillsItem text="HTML" icon="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
                                <SkillsItem text="CSS" icon="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
                                <SkillsItem text="Javascript" icon="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg" />
                                <SkillsItem text="SCSS" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" />
                                <SkillsItem text="Bootstrap" icon="https://i.stack.imgur.com/C9301.png" />
                                <SkillsItem text="React" icon="https://www.nedi.cl/nedi/icon-react.png" />
                                <SkillsItem text="Redux" icon="http://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" />
                            </div>
                        </div>

                        <div className="skills__content skills__close">
                            <SkillsTitle title="Otros" subtitle="Otras tecnologías que he usado" icon="uil uil-wrench" />
                            <div className="skills__list grid">
                                <SkillsItem text="Git y Github" icon="http://assets.stickpng.com/images/5847f981cef1014c0b5e48be.png" />
                                <SkillsItem text="Maven" icon="https://images.velog.io/images/pllap/post/9cefd5dd-bd0c-4382-aa25-6751e1cc9cec/file_type_maven_icon_130397.png" />
                                <SkillsItem text="Npm" icon="https://www.pngrepo.com/png/331509/512/npm.png" />
                                <SkillsItem text="Yarn" icon="https://avatars.githubusercontent.com/u/22247014?s=400&v=4" />
                                <SkillsItem text="Composer" icon="https://cdn-icons-png.flaticon.com/512/919/919840.png" />
                                <SkillsItem text="Postman" icon="https://repository-images.githubusercontent.com/233450313/aab78f80-432c-11ea-80f4-3eeebac4d126" />
                                <SkillsItem text="Docker" icon="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" />
                                <SkillsItem text="Linux" icon="https://cdn-icons-png.flaticon.com/512/518/518713.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Qualification />
        </section>
    )
}
