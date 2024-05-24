import React, { useState } from 'react';
import './CreateTaskForm.css';

const CreateTaskForm = () => {

    // --- BEGINNER
    // const [taskName, setTaskName] = useState("");
    // const [dueDate, setDueDate] = useState("");
    // const [taskDetails, setTaskDetails] = useState("");


    // ---  MIDDLE & ADVANCED
    const [formData, setFormData] = useState ({
        taskName: "",
        dueDate: "",
        taskDetails: "",
    });

    // --- MIDDELE & BEGINNER
    // const handleNameChange = (event) => {
    //     // --- MIDDLE
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         taskName: event.target.value,
    //     }));
    //     // --- BEGINNER
    //     // setTaskName(event.target.value);
    // }

    // const handleDateChange = (event) => {
    //     // --- MIDDLE
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         dueDate: event.target.value,
    //     }));
    //     // --- BEGINNER
    //     // setDueDate(event.target.value);
    // }

    // const handleDetailsChange = (event) => {
    //     // --- MIDDLE
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         taskDetails: event.target.value,
    //     }));
    //     // --- BEGINNER
    //     // setTaskDetails(event.target.value);
    // }
    

    // --- ADVANCED
    const handleInputChange = (event) => {
        console.log(event.target.name);

    //     setFormData((prevState) => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value,
    //     }));
    }

    // --- MIDDLE & ADVANCED
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formData", formData);
        
        // console.log("taskName=", taskName);
        // console.log("dueDate=", dueDate);
        // console.log("taskDetails=", taskDetails);

        // const newTask = {
        //     name: taskName,
        //     dueDate: dueDate,
        //     taskDetails: taskDetails,
        //     status: "To do",
        // };

        // console.log("newTask", newTask); 
        // setTaskName("");
        // setDueDate("");
        // setTaskDetails("");   
        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className='label-md'>Task Name</label>
                    <input value={formData.taskName} name='taskName' onChange={handleInputChange} /* {handleNameChange} */ className='input-primary' type="text" />
                </div>

                <div className="form-row">
                    <label className='label-md'>Due Date
                    </label>
                    <input value={formData.dueDate} name='dueDate' onChange={handleInputChange} /* {handleDateChange} */className='input-primary' n type="date" />
                </div>

                <div className="form-row">
                    <label className='label-md'>Task Details</label>
                    <textarea value={formData.taskDetails} name='taskDetails' onChange={handleInputChange} /* {handleDetailsChange} */ className='input-primary' id="" cols="30" rows="10"></textarea>
                </div>

                <button className='button-primary' type="submit">Create Task</button>
            </form>
        </div>
  
    );
};

export default CreateTaskForm;

