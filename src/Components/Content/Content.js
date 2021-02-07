import './Content.css';

function Content(props) {
    const { copy } = props;
    return (
        <div className="Content">
            {copy}
        </div>
    )
}

export default Content;