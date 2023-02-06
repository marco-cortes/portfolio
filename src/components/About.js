import img from '../img/kayn.jpg';
import pdf from '../docs/Marco_Antonio_Cortes_Nava_CV.pdf';
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
                        Tengo 22 años y soy egresado de la carrera de Ingeniería en Computación en la FES Aragón (UNAM).
                        <br /><br />
                        Cuento con conocimientos sobre tecnologías de desarrollo web como React, Angular, Spring Boot y Node JS.
                        <br /><br />
                        Actualmente me encuentro trabajando como programador FullStack en <strong>Crowe México</strong> implementando tecnologías
                        de desarrollo web.
                        <br /><br />
                        Aspiro al éxito profesional, encontrar oportunidades que contribuyan a mi desarrollo como programador, así como tambien
                        brindar mis conocimientos como servicio para llegar a un bien común.
                    </p>
                    {
                        /*
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
                        */
                    }
                    <div className="about__buttons">
                        <Link text="Descargar CV" icon="uil uil-download-alt" dir={pdf} download="Marco_Antonio_Cortes_Nava_CV" />
                    </div>
                </div>
            </div>

        </section>
    )
}
