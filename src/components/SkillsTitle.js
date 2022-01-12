export const SkillsTitle = ({ title, subtitle, icon }) => {
    return (
        <div className="skills__header">
            <i className={icon + " skills__icon"}></i>
            <div>
                <h1 className="skills__titles">{title}</h1>
                <span className="skills__subtitle">{subtitle}</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
        </div>
    )
}
