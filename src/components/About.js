import img from '../img/kayn.jpg';
import pdf from '../docs/CV.pdf';
import { Link } from './Link';

export const About = () => {
    return (
        <section className="about section div-bg" id="about">

            <h2 className="section__title">Acerca de mí</h2>
            <span className="section__subtitle">Mi introducción</span>

            <div className="about__container container grid">
                <img src={img} alt="about" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Con 21 años, soy un estudiante de la carrera de Ingeniería en Computación en la FES Aragón (UNAM), me encuentro
                        cursando el 8vo semestre. <br /><br /> Llevo más de 3 años programando en Java, mis conocimientos están enfocados en Java y React, además de eso he trabajado con tecnologías como Redux, Spring, Hibernate, JPA y MySQL.
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">Años de<br /> exp. en Java</span>
                        </div>
                        <div>
                            <span className="about__info-title">6+</span>
                            <span className="about__info-name">Proyectos <br /> realizados</span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">Cursos <br /> concluidos</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <Link text="Descargar CV" icon="uil uil-download-alt" dir={pdf} download="Marco_Antonio_Cortes_Nava_CV"/>
                    </div>
                </div>
            </div>

        </section>
    )
}
