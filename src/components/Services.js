import { useEffect } from "react"
import { ServicesCard } from "./ServicesCard";
import { ServicesModal } from "./ServicesModal";

export const Services = () => {

    useEffect(() => {
        const modalViews = document.querySelectorAll(".services__modal"),
            modalBtns = document.querySelectorAll(".services__button"),
            modalClose = document.querySelectorAll(".services__modal-close");
        let modal = function (modalClick) {
            modalViews[modalClick].classList.add("active-modal");
        }
        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener("click", () => {
                modal(i)
            })
        })
        modalClose.forEach(modalClose => {
            modalClose.addEventListener("click", () => {
                modalViews.forEach(modalView => {
                    modalView.classList.remove("active-modal");
                });
            });
        })
    }, []);

    const backend = [
        "Desarrollo e implementación de aplicaciones web.",
        "Despliegue de aplicaciones con dominio y certificado SSL en la nube.",
        "Arquitectura MVC o de Micro Servicios.",
        "Implementación de Docker."
    ];

    const frontend = [
        "Maquetado web adaptable a moviles con HTML, CSS y Javascript.",
        "Implementación de Bootstrap.",
        "Animaciones a elementos web.",
        "Creación aplicaciones de todo tipo."
    ];

    const databases = [
        "Diseño de bases de datos para aplicaciones de todo tipo.",
        "Implementación de bases de datos con SQL.",
        "Bases de datos relacionales o no relacionales."
    ];


    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Mis servicios</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <ServicesCard icon="uil uil-server" text="Backend" />
                    <ServicesModal items={backend} title="Backend" />
                </div>

                <div className="services__content">
                    <ServicesCard icon="uil uil uil-arrow" text="Frontend" />
                    <ServicesModal items={frontend} title="Frontend" />
                </div>

                <div className="services__content">
                    <ServicesCard icon="uil uil-database" text="Bases de Datos" />
                    <ServicesModal items={databases} title="Bases de Datos" />
                </div>
            </div>
        </section>
    )
}
