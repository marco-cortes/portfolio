export const Link = ({ text, dir, icon, download = false }) => {
    return (
        <a className="button button--flex" href={dir} download={download}>
            {text} <i className={icon + " button__icon"}></i>
        </a>
    );
};
