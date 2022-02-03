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
                            <MainIcon link="https://instagram.com/marco.cortes.xd" icon="uil uil-instagram" />
                            <MainIcon link="https://www.linkedin.com/in/marco-antonio-cortes-nava-94a3a8215/" icon="uil uil-linkedin-alt" />
                        </div>
                        <div className="home__img">
                           <MainImage />
                        </div>
                        <div className="home__data">
                            <h1 className="home__title">Hola, yo soy Marco Antonio</h1>
                            <h3 className="home__subtitle">Soy un programador</h3>
                            <p className="home__description">
                                Tengo conocimiento en tecnologías enfocadas al desarrollo web, tanto en el Backend-end como en el Front-end.
                            </p>
                            <Link text="¡Contáctame!" icon="uil uil-message" dir="#contact" />
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
