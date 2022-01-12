export const MainIcon = ({ link, icon }) => {
    return (
        <a href={link} className="home__social-icon" target="_blank" rel="noreferrer">
            <i className={icon}></i>
        </a>
    )
}
