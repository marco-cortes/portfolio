import img from '../img/kayn.jpg';
//import pdf from '../docs/CV.pdf';
import { Link } from 'react-router-dom';

export const About = () => {
    return (
        <section className="about section div-bg" id="about">

            <h2 className="section__title">Acerca de mí</h2>
            <span className="section__subtitle">Mi introducción</span>

            <div className="about__container container grid" data-aos="fade-up">
                <img src={img} alt="about" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        Estudiante de la carrera de Ingeniería en Computación en la FES Aragón (UNAM),
                        cursando el 8vo semestre. <br /><br /> Soy un programador web, especializado en Java y React JS, conociendo frameworks como Spring, Hibernate, JPA y MySQL.
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
                        <Link className="button button--flex" to="/curriculum" target="_blank" rel='noreferrer'>
                            Curriculum Vitae <i className="uil uil-clipboard-notes button__icon"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
