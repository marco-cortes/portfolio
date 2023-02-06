import React from 'react'
import { Link } from './Link';
import { MainIcon } from './MainIcon';
import { MainImage } from './MainImage';

export const Main = () => {
    return (
        <main className="main animate__animated animate__fadeInUp">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__content grid">
                        <div className="home__social">
                            <MainIcon link="https://github.com/marco-cortes" icon="uil uil-github-alt" />
                            <MainIcon link="https://www.linkedin.com/in/marco-crts/" icon="uil uil-linkedin-alt" />
                            <MainIcon link="mailto:marcocortes84@aragon.unam.mx" icon="uil uil-envelopes" />
                        </div>
                        <div className="home__img">
                           <MainImage />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Marco Cortes</h1>
                            <h3 className="home__subtitle">Programador</h3>
                            <p className="home__description">
                                Soy un apasionado por la tecnología y programación, 
                                busco aprendizaje para mi desarrollo profesional.
                            </p>
                            <Link text="Contáctame" icon="uil uil-message" dir="#contact" />
                        </div>
                    </div>
                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-button button--flex">
                            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span className="home__scroll-name">Ver más...</span>
                            <i className="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
