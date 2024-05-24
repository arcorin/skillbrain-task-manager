import React/*, { useState }*/ from "react";
import './TaskCard.css'; 
import Badge from '../badge/Badge';
import DateContainer from '../date-container/DateContainer';

function TaskCard(props) {
    // // demonstarate that the value of a variable inside "useState" is changed at a new render... 
    // // ...(the variable has a new state, its value is saved)
    // const [counter, setCounter] = useState(0);

    // // demonstrate that the value of a variable is the same at a new render
    // let nr = 0;

    // console.log("RENDER " + counter + " " + props.id);
    // console.log("nr " + nr);
    
    // const handleClickAdd = () => {
    //     setCounter(counter + 1);
    //     console.log('count', counter);
    //     nr += 1;
    // };

    // const handleClickSubtract = () => {
    //     setCounter(counter - 1);
    //     console.log('count', counter);
    //     nr -= 1;
    // };

    
    
    return (
    <div className="card-wrapper">    
        <div className="card-header">
            <p className="task-id">{props.id}</p>
            <Badge status={props.status} />
        </div>
        <div className="card-content">
            <p>{props.name}</p>
            {/* <p>{counter}</p> */}
        </div>
        <div className="card-footer">
            {/* <button onClick={handleClickAdd}>INCREMENT</button>
            <button onClick={handleClickSubtract}>DECREMENT</button> */}
            <DateContainer date={props.dueDate} /> 
        </div>
    </div>
    );
}

export default TaskCard;