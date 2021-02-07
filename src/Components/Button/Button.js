import './Button.css';

function Button(props) {
    const { submitDisabled, copy, handleClick } = props;
    return (
        <button className="Button" onClick={handleClick} disabled={submitDisabled}>
            {copy}
        </button>
    )
}

export default Button;