export const SkillsItem = ({text, percent, icon}) => {
    return (
        <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">{text}</h3>
                <img className="skills__i" src={icon} alt="icon" />
            </div>
            <div className="skills__bar">
                <span className={"skills__percentage skills__100"}></span>
            </div>
        </div>
    )
}
