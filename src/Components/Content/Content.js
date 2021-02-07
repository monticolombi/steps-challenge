import './Content.css';

function Content(props) {
    const { copy } = props;
    return (
        <div className="Content">
            <p className="Content__text">{copy}</p>
        </div>
    )
}

export default Content;