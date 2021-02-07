import './Steps.css';

function Steps(props) {
    const { children } = props;
    return (
        <div className="Steps">
            {children}
        </div>
    )
}

export default Steps;