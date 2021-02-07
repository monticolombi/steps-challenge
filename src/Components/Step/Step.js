import './Step.css';

function Step(props) {
    const { 
        focus, 
        number, 
        title 
    } = props;

    const isActive = focus === number;
    const isComplete = focus > number;

    return (
        <div className='Step'>
            <div className={`${isActive ? 'Step__icon--active' : ''} ${isComplete ? 'Step--completed' : 'Step--not-completed'} icon`}>
                {isComplete ? <div class="checkmark">L</div> : number}
            </div>
            <div className={` ${isActive ? 'Step__title--active' : ''} ${isComplete ? 'Step--completed' : 'Step--not-completed'} title`}>{isComplete ? 'Completed' : title}</div>
        </div>
    )
}

export default Step;