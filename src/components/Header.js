import { useEffect } from 'react'

export const Header = () => {

    useEffect(() => {
        const navMenu = document.getElementById("nav-menu");
        const navToggle = document.getElementById("nav-toggle");
        const navClose = document.getElementById("nav-close");

        if (navToggle) {
            navToggle.addEventListener("click", () => {
                navMenu.classList.add("show-menu");
            });
        }

        if (navClose) {
            navClose.addEventListener("click", () => {
                navMenu.classList.remove("show-menu");
            })
        }

        const navLink = document.querySelectorAll('.nav__link')

        function linkAction() {
            const navMenu = document.getElementById('nav-menu')
            navMenu.classList.remove('show-menu')
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));

        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'uil-sun'

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

        if (selectedTheme) {
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
            themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
        }
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        });
    }, [])

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">&lt; Marco Cortes /&gt;</a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> Sobre mi
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-brackets-curly nav__icon"></i> Habilidades
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Servicios
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-layer-group nav__icon"></i> Portafolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-comment-alt-message nav__icon"></i> Contacto
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close"></i> </div>
                <div className="nav__btns">

                    <i className='uil uil-moon change-theme' id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}
