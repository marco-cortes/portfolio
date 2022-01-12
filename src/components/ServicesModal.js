export const ServicesModal = ({ title, items }) => {
    console.log(title)
    return (
        <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">{title} </h4>
                <i className="uil uil-times services__modal-close"></i>
                <ul className="services__modal-services grid">
                    {
                        items.map((item, index) => (
                            <li className="services__modal-service" key={index}>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p>{item}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
