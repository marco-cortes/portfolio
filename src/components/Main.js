import React from 'react'

import { MainIcon } from './MainIcon';
import { MainImage } from './MainImage';

export const Main = () => {
    return (
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid" data-aos="fade-down">
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
                            <h1 className="home__title">Hola, yo soy Marco</h1>
                            <h3 className="home__subtitle">Soy un programador web</h3>
                            <p className="home__description">
                                Tengo conocimiento y experiencia en el desarrollo web, tanto en el lado front como en el backend
                            </p>
                            <a href="#contact" className="button button-flex">
                                ¡Contáctame! <i className="uil uil-message button__icon"></i>
                            </a>
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
