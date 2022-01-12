export const SkillsItem = ({text, percent}) => {
    return (
        <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">{text}</h3>
                <span className="skills__number">{percent}%</span>
            </div>
            <div className="skills__bar">
                <span className={"skills__percentage skills__"+percent}></span>
            </div>
        </div>
    )
}
