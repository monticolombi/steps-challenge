import './Button.css';

function Button(props) {
    const { isDisabled, copy, handleClick } = props;
    return (
        <button className="Button" onClick={handleClick} disabled={isDisabled}>
            {copy}
        </button>
    )
}

export default Button;