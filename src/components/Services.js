import { useEffect } from "react"

export const Services = () => {

    useEffect(() => {
        const modalViews = document.querySelectorAll(".services__modal"),
              modalBtns = document.querySelectorAll(".services__button"),
              modalClose = document.querySelectorAll(".services__modal-close");
        let modal = function(modalClick) {
            modalViews[modalClick].classList.add("active-modal");
        }
        modalBtns.forEach((modalBtn, i) => {
            modalBtn.addEventListener("click" , () => {
                modal(i)
            })
        })
        modalClose.forEach(modalClose => {
            modalClose.addEventListener("click" , () => {
                modalViews.forEach(modalView => {
                    modalView.classList.remove("active-modal");
                });
            });
        })
    },[]);
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Servicios</h2>
            <span className="section__subtitle">Mis servicios</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Backend <br/> Developer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        Ver más
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Backend Developer</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Desarrollo e implementación de aplicaciones web.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Despliegue de aplicaciones con dominio y certificado SSL en la nube.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Arquitectura MVC o de micro servicios.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Implementación de Docker.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Frontend <br/> Developer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        Ver más
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Frontend Developer</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Maquetado web adaptable a moviles con HTML, CSS y Javascript.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Implementación de Bootstrap.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Animaciones a elementos web.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Creación aplicaciones de todo tipo.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-database services__icon"></i>
                        <h3 className="services__title">Database <br/> Designer</h3>
                    </div>
                    <span className="button button--flex button--small button--link services__button">
                        Ver más
                        <i className="uil uil-arrow-right button__icon"></i>
                    </span>
                    <div className="services__modal">
                        <div className="services__modal-content">
                            <h4 className="services__modal-title">Database Designer</h4>
                            <i className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Diseño de bases de datos para aplicaciones de todo tipo.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Implementación de bases de datos con SQL.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p>Bases de datos relacionales o no relacionales.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
