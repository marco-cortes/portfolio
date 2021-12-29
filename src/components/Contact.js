
export const Contact = () => {
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

                
                <form className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label className="contact__label" htmlFor="name">Nombre </label>
                            <input className="contact__input" type="text" id="name" placeholder="Escribe tu nombre" required/>
                        </div>
                        <div className="contact__content">
                            <label className="contact__label" htmlFor="email">Email </label>
                            <input className="contact__input" type="email" id="email" placeholder="Escribe tu email" required/>
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label" htmlFor="message">Mensaje </label>
                        <textarea className="contact__input" id="message" rows="7" placeholder="Escribe tu mensaje" required></textarea>
                    </div>
                
                    <div>
                        <a className="button button--flex" href="/">
                            Enviar
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}
