export const ServicesCard = ({icon, text}) => {
    return (
        <>
            <div>
                <i className={icon+" services__icon"}></i>
                <h3 className="services__title">{text}</h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
                Ver más
                <i className="uil uil-arrow-right button__icon"></i>
            </span>
        </>
    )
}
