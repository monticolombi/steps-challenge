import './Button.css';

function Button(props) {
    const { 
        copy, 
        handleClick, 
        isDisabled 
    } = props;
    return (
        <button className="Button" onClick={handleClick} disabled={isDisabled}>
            {copy}
        </button>
    )
}

export default Button;