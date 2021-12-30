import { useEffect } from "react"

import azure from '../docs/AZURE.pdf';
import oracle from '../docs/ORACLE.pdf';
import react from '../docs/REACT.pdf';
import node from '../docs/NODE.pdf';
import php from '../docs/PHP.pdf';
import html from '../docs/HTML.pdf';
import spring from '../docs/SPRING.pdf';
import laravel from '../docs/LARAVEL.pdf';


export const Qualification = () => {

    useEffect(() => {
        const tabs = document.querySelectorAll("[data-target]"),
            tabContents = document.querySelectorAll("[data-content]");
        tabs.forEach(tab => {
            tab.addEventListener("click", function (e) {
                const target = document.querySelector(tab.dataset.target);

                tabContents.forEach(content => {
                    content.classList.remove("qualification__active");
                });

                target.classList.add("qualification__active");

                tabs.forEach(tab => {
                    tab.classList.remove("qualification__active");
                });

                tab.classList.add("qualification__active");
            });
        });
    }, []);

    return (
        <section className="qualification section">
            <div className="div-bg">
                <h2 className="section__title">Educación</h2>
                <span className="section__subtitle">Mi preparación profesional</span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex qualification__active" data-target="#education">
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Educación
                        </div>
                        <div className="qualification__button button--flex" data-target="#work">
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Cursos
                        </div>
                    </div>
                    <div className="qualification__sections">

                        <div className="qualification__content qualification__active" data-content id="education">

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Ingeniería en Computación</h3>
                                    <span className="qualification__subtitle">México - FES Aragón (UNAM)</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> 2018 - Presente
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Bachillerato</h3>
                                    <span className="qualification__subtitle">México - CCH Vallejo (UNAM)</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> 2015 - 2018
                                    </div>
                                </div>

                            </div>

                            <div className="qualification__data">
                                <div>
                                    <a href={azure} download><h3 className="qualification__title">Azure AZ-900</h3></a>
                                    <span className="qualification__subtitle">México - Inovaccion</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Octubre 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                </div>

                                <div>
                                <a href={oracle} download><h3 className="qualification__title">Oracle Database Foundations</h3></a>
                                    <span className="qualification__subtitle">México - Oracle Academy</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Diciembre 2021
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__content" data-content id="work">
                            <div className="qualification__data">
                                <div>
                                    <a href={spring} download><h3 className="qualification__title">Universidad Spring</h3></a>
                                    <span className="qualification__subtitle">México - Udemy</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Diciembre 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                <a href={html} download><h3 className="qualification__title">HTML, CSS y JS</h3></a>
                                    <span className="qualification__subtitle">México - Udemy</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Diciembre 2021
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div>
                                <a href={node} download><h3 className="qualification__title">Node JS</h3></a>
                                    <span className="qualification__subtitle">México - UNAM</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Agosto 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                <a href={react} download><h3 className="qualification__title">React + Firebase</h3></a>
                                    <span className="qualification__subtitle">México - Udemy</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Julio 2021
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div>
                                <a href={laravel} download><h3 className="qualification__title">MVC con Laravel</h3></a>
                                    <span className="qualification__subtitle">México - UNAM</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Febrero 2021
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                </div>

                                <div>
                                <a href={php} download><h3 className="qualification__title">Desarrollo web con PHP</h3></a>
                                    <span className="qualification__subtitle">México - UNAM</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Febrero 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
