export const HeaderLink = ({ icon, link, text, active=false }) => {
    let activeClass="nav__link";
    if(active)
        activeClass="nav__link active-link";

    return (
        <li className="nav__item">
            <a href={link} className={activeClass}>
                <i className={icon+" nav__icon"}></i>{" "+text}
            </a>
        </li>
    )
}
