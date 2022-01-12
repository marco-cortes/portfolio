export const QualificationItem = ({ end = false, title, subtitle, date, doc, name, last = false }) => {

    if (end) {
        return (
            <div className="qualification__data">
                <div></div>
                {
                    !last ?
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        : <div><span className="qualification__rounder"></span></div>
                }

                <div>
                    <a href={doc} download={name}><h3 className="qualification__title">{title}</h3></a>
                    <span className="qualification__subtitle">{subtitle}</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>{" " + date}
                    </div>
                </div>

            </div>
        )
    }


    return (
        <div className="qualification__data">
            <div style={{
                textAlign: "end",
            }}>
                <a href={doc} download={name}><h3 className="qualification__title">{title}</h3></a>
                <span className="qualification__subtitle">{subtitle}</span>
                <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>{" " + date}
                </div>
            </div>
            {
                !last ?
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    : <div><span className="qualification__rounder"></span></div>
            }
        </div>
    )
}
