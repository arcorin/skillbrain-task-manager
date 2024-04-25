import './TaskCard.css';
import Badge from '../badge/Badge.js';
import DateContainer from '../date-container/DateContainer.js';

function TaskCard(props) {
    let taskId = props.id;

    const handleClick = () => {
        console.log("You just clicked on Card no." + taskId + ".");
        taskId += "Clicked!";
        
    };
    
    return (
    <div className="card-wrapper">    
        <div className="card-header">
            <p className="task-id">{props.id}</p>
            <Badge status={props.status} />
        </div>
        <div className="card-content">
            <p>{props.name}</p>
        </div>
        <div className="card-footer">
            <button onClick={handleClick}>Click me!</button>
            <DateContainer date={props.dueDate} />
        </div>
    </div>
    );
}

export default TaskCard;