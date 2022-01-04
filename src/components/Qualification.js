import { useEffect } from "react";
import { Link } from "react-router-dom";

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
        <section className="qualification section div-bg">
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
                                <Link to="/fes" target="_blank" rel="noreferrer"><h3 className="qualification__title">Ingeniería en Computación</h3></Link>
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
                                <Link to="/cch" target="_blank" rel="noreferrer"><h3 className="qualification__title">Bachillerato</h3></Link>
                                <span className="qualification__subtitle">México - CCH Vallejo (UNAM)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2018
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <Link to="/azure" target="_blank" rel="noreferrer"><h3 className="qualification__title">Azure AZ-900</h3></Link>
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
                                <Link to="/oracle" target="_blank" rel="noreferrer"><h3 className="qualification__title">Oracle Database Foundations</h3></Link>
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
                                <Link to="/spring" target="_blank" rel="noreferrer"><h3 className="qualification__title">Universidad Spring</h3></Link>
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
                                <Link to="/frontend" target="_blank" rel="noreferrer"><h3 className="qualification__title">HTML, CSS y JS</h3></Link>
                                <span className="qualification__subtitle">México - Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Diciembre 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <Link to="/node" target="_blank" rel="noreferrer"><h3 className="qualification__title">Node JS</h3></Link>
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
                                <Link to="/react" target="_blank" rel="noreferrer"><h3 className="qualification__title">React + Firebase</h3></Link>
                                <span className="qualification__subtitle">México - Udemy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Julio 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <Link to="/laravel" target="_blank" rel="noreferrer"><h3 className="qualification__title">MVC con Laravel</h3></Link>
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
                                <Link to="/php" target="_blank" rel="noreferrer"><h3 className="qualification__title">Desarrollo web con PHP</h3></Link>
                                <span className="qualification__subtitle">México - UNAM</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Febrero 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
