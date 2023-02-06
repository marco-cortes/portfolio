import { useEffect } from "react"

import azure from '../docs/AZURE.pdf';
import oracle from '../docs/ORACLE.pdf';
import react from '../docs/REACT.pdf';
import reactF from '../docs/REACT_F.pdf';
import node from '../docs/NODE.pdf';
import php from '../docs/PHP.pdf';
import html from '../docs/HTML.pdf';
import spring from '../docs/SPRING.pdf';
import laravel from '../docs/LARAVEL.pdf';
import cch from '../docs/CCH.pdf';
import fes from '../docs/FES.pdf';
import { QualificationItem } from "./QualificationItem";


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

                
                if(tab.dataset.target === "#education") {
                    target.classList.add('animate__animated', "animate__flipInY");    
                } else {
                    target.classList.add('animate__animated', "animate__flipInYY");
                }

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
            <span className="section__subtitle">Mi formación profesional</span>

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
                        <QualificationItem title="Ingeniería en Computación" subtitle="México - FES Aragón (UNAM)" date="2018 - Presente" doc={fes} name="FES" />
                        <QualificationItem title="Bachillerato" subtitle="México - CCH Vallejo (UNAM)" date="2015 - 2018" doc={cch} name="CCH" end={true} />
                        <QualificationItem title="Azure AZ-900" subtitle="México - Inovaccion" date="Octubre 2021" doc={azure} name="AZURE" />
                        <QualificationItem title="Oracle Database Foundations" subtitle="México - Oracle Academy" date="Diciembre 2021" doc={oracle} name="ORACLE" end={true}/>
                        <QualificationItem title="Launch X" subtitle="México - Innovacción Virtual" date="Mayo 2022" last={true} />
                    </div>
                    <div className="qualification__content" data-content id="work">
                    <QualificationItem title="React: De cero a experto" subtitle="México - Udemy" date="Enero 2022" doc={reactF} name="REACT_FULL" end={true} />
                        <QualificationItem title="Universidad Spring" subtitle="México - Udemy" date="Diciembre 2021" doc={spring} name="SPRING" />
                        <QualificationItem title="HTML, CSS y JS" subtitle="México - Udemy" date="Diciembre 2021" doc={html} name="FRONTEND" end={true} />
                        <QualificationItem title="Node JS" subtitle="México - UNAM" date="Agosto 2021" doc={node} name="NODE" />
                        <QualificationItem title="React + Firebase" subtitle="México - Udemy" date="Julio 2021" doc={react} name="REACT" end={true} />
                        <QualificationItem title="MVC con Laravel" subtitle="México - UNAM" date="Febrero 2021" doc={laravel} name="LARAVEL" />
                        <QualificationItem title="Desarrollo web con PHP" subtitle="México - UNAM" date="Febrero 2021" doc={php} name="PHP" end={true} last={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}
