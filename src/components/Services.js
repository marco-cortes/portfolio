import { useEffect } from "react"
import { ServicesCard } from "./ServicesCard";
import { ServicesModal } from "./ServicesModal";

export const Services = () => {

    useEffect(() => {
        const modalViews = document.querySelectorAll(".services__modal"),
            modalContent= document.querySelectorAll(".services__content"),
            modalBtns = document.querySelectorAll(".services__button"),
            modalClose = document.querySelectorAll(".services__modal-close");

        modalContent.forEach((item, index) => {
            item.addEventListener("click", () => {
                show(index, modalViews);
            });
        });

        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener("click", () => {
                show(i, modalViews);
            })
        });

        modalClose.forEach(modalClose => {
            modalClose.addEventListener("click", () => {
                close(modalViews);
            });
        });
    }, []);

    const show = (i, modals) => {
        modals[i].classList.add("active-modal");
    }

    const close = (modals) => {
        modals.forEach(modal => {
            modal.classList.remove("active-modal");
        });
    }

    const backend = [
        "Creación de APIs REST.",
        "Arquitectura MVC.",
        "Despliegue de aplicaciones con dominio y certificado SSL en la nube.",
    ];

    const frontend = [
        "Maquetado web responsivo con HTML, CSS y Javascript.",
        "Implementación de Bootstrap.",
        "Implementación de React a páginas estáticas.",
    ];

    const databases = [
        "Diseño de bases de datos.",
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
                </div>
                <div className="services__content">
                    <ServicesCard icon="uil uil uil-arrow" text="Frontend" />
                </div>
                <div className="services__content">
                    <ServicesCard icon="uil uil-database" text="Bases de Datos" />
                </div>
            </div>

            <ServicesModal items={backend} title="Backend" />
            <ServicesModal items={frontend} title="Frontend" />
            <ServicesModal items={databases} title="Bases de Datos" />
        </section>
    )
}
