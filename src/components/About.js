import img from '../img/kayn.jpg';
import pdf from '../docs/CV.pdf';

export const About = () => {
    return (
        <section className="about section div-bg" id="about">

            <h2 className="section__title">Acerca de mí</h2>
            <span className="section__subtitle">Mi introducción</span>

            <div className="about__container container grid" data-aos="fade-up">
                <img src={img} alt="about" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Con 21 años, soy un estudiante de la carrera de Ingeniería en Computación en la FES Aragón (UNAM), en donde estoy
                        cursando el 8vo semestre. <br /><br /> Soy un programador web, especializado en Java y React JS, conociendo tecnologías como Spring, Hibernate, JPA y MySQL.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">Años de<br /> exp. en Java</span>
                        </div>
                        <div>
                            <span className="about__info-title">10+</span>
                            <span className="about__info-name">Proyectos <br /> realizados</span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">Cursos <br /> concluidos</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a className="button button--flex" href={pdf} download="Marco_Antonio_Cortes_Nava_CV">
                            Descargar CV <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}
