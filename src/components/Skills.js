import { useEffect } from "react"

export const Skills = () => {

    useEffect(()=>{
        const skillsContent = document.getElementsByClassName("skills__content"),
              skillsHeader = document.querySelectorAll(".skills__header");
        function toggleSkills() {
            let itemClass = this.parentNode.className;

            for(let i = 0; i < skillsContent.length; i++){
                skillsContent[i].className="skills__content skills__close";
            }
            if(itemClass === "skills__content skills__close") {
                this.parentNode.className="skills__content skills__open";
            }
        }

        skillsHeader.forEach(item => {
            item.addEventListener("click", toggleSkills);
        })
    }, []);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Mi nivel técnico</span>

            <div className="skills__container container grid" data-aos="fade-right">
                <div>
                    <div className="skills__content skills__open">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Backend</h1>
                                <span className="skills__subtitle">Más de 2 años</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>

                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Java</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__java">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Spring</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__spring">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Hibernate</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__hibernate">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JPA</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__jpa">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Java Server Faces</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__jsf">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PHP</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Laravel</h3>
                                    <span className="skills__number">45%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__laravel">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node JS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-database skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Bases de Datos</h1>
                                <span className="skills__subtitle">Más de 1 año</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MySQL</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mysql">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Workbench</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__workbench">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PostgreSQL</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__postgres">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Firebase</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__mongodb">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__sql">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-cloud skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Nube</h1>
                                <span className="skills__subtitle">Más de 1 año</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Azure</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__azure">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Google Cloud</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__google">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">AWS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__aws">

                                    </span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Heroku</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__heroku">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-desktop skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Frontend</h1>
                                <span className="skills__subtitle">Más de 2 años</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">90%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">XHTML</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__xhtml">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Typescript</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__ts">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__bootstrap">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">PrimeFaces</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__primefaces">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Ionic</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__ionic">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-wrench skills__icon"></i>
                            <div>
                                <h1 className="skills__titles">Otros</h1>
                                <span className="skills__subtitle">Más de 1 año</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow"></i>
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Git y Github</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__git">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Maven</h3>
                                    <span className="skills__number">80%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__maven">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">NPM</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__npm">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Yarn</h3>
                                    <span className="skills__number">70%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__yarn">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Composer</h3>
                                    <span className="skills__number">50%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__composer">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Postman</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__postman">

                                    </span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Docker</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__docker">

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
