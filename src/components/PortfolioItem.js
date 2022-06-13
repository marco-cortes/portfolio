export const PortfolioItem = ({img, title, desc, link, repo}) => {
    return (
        <div className="portfolio__content grid">
            <img src={img} alt="" className="portfolio__img" />
            <div className='portfolio__data'>
                <h3 className='portfolio__title'>{title}</h3>
                <p className='portfolio__description'>{desc}</p>
                <a className='button button--flex button--small portfolio__button' href={link} target="_blank" rel="noreferrer">
                    Demo
                    <i className="uil uil-arrow-circle-right button__icon"></i>
                </a>
                <a className='button button--flex button--small portfolio__button button--secondary' href={repo} target="_blank" rel="noreferrer">
                    Código
                    <i className="uil uil-github-alt button__icon"></i>
                </a>
            </div>
        </div>
    )
}
