import { useEffect } from 'react'
import { HeaderLink } from './HeaderLink';

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
                <a href="/" className="nav__logo">
                    <span>&lt; Marco Cortes /&gt;</span>
                    <span className="nav__subtitle">Programador</span>
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <HeaderLink text="Inicio" icon="uil uil-estate" link="#home" active={true} />
                        <HeaderLink text="Sobre mi" icon="uil uil-user" link="#about" />
                        <HeaderLink text="Habilidades" icon="uil uil-brackets-curly" link="#skills" />
                        <HeaderLink text="Servicios" icon="uil uil-briefcase-alt" link="#services" />
                        <HeaderLink text="Portafolio" icon="uil uil-layer-group" link="#portfolio" />
                        <HeaderLink text="Contacto" icon="uil uil-comment-alt-message" link="#contact" />
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
