import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {

    const form = useRef();
    const [enviando, setEnviando] = useState(false);
    const [status, setStatus] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setEnviando(true);
        emailjs.sendForm('servicio', 'template', form.current, 'user')
            .then(() => {
                setEnviando(false);
                setStatus(true);
                const modalView = document.getElementById("contact-modal");
                modalView.classList.add("active-modal");
                form.current.name.value=""
                form.current.email.value=""
                form.current.message.value=""
            }).catch(err => {
                setEnviando(false);
                setStatus(false);
                const modalView = document.getElementById("contact-modal");
                modalView.classList.add("active-modal");
            });
    };

    useEffect(() => {
        const modalClose = document.getElementById("close-modal");
        const modalView = document.getElementById("contact-modal");
        modalClose.addEventListener("click", () => {
            modalView.classList.remove("active-modal");
        });
    });

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contactame</h2>
            <span className="section__subtitle">Ponte en contacto</span>

            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Llamame</h3>
                            <span className="contact_subtitle">5532777800</span>
                        </div>
                    </div>

                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact_subtitle">marcocortes84@aragon.unam.mx</span>
                        </div>
                    </div>


                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon"></i>
                        <div>
                            <h3 className="contact__title">Ubicación</h3>
                            <span className="contact_subtitle">México - CDMX</span>
                        </div>
                    </div>
                </div>


                <form className="contact__form grid" ref={form} onSubmit={sendEmail}>
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label" htmlFor="name">Nombre </label>
                            <input className="contact__input" type="text" name="name" placeholder="Escribe tu nombre" required />
                        </div>
                        <div className="contact__content">
                            <label className="contact__label" htmlFor="email">Email </label>
                            <input className="contact__input" type="email" name="email" placeholder="Escribe tu email" required />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label" htmlFor="message">Mensaje </label>
                        <textarea className="contact__input" name="message" rows="7" placeholder="Escribe tu mensaje" required></textarea>
                    </div>

                    <div>
                        {
                            enviando ? <button className="button button--flex" type='submit' disabled>
                                Enviando...
                                <i className="uil uil-message button__icon"></i>
                            </button>
                                : <button className="button button--flex" type='submit'>
                                    Enviar
                                    <i className="uil uil-message button__icon"></i>
                                </button>
                        }
                    </div>
                </form>

                <div className="services__modal" id="contact-modal">
                    <div className="services__modal-content">
                        <h4 className="services__modal-title">
                            {
                                status ? <span>Mensaje enviado</span>
                                : <span>Error al enviar mensaje</span>
                            }
                        </h4>
                        <i className="uil uil-times services__modal-close" id="close-modal"></i>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                {
                                    status ? 
                                        <p><i className="uil uil-check-circle services__modal-icon"></i> Mensaje enviado exitosamente.</p>
                                    : 
                                        <p><i className="uil uil-exclamation-octagon services__modal-icon"></i> Ha ocurrido un error, intente más tarde.</p>
                                        
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
