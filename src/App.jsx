import React from "react";
import './App.css';
import TaskViewer from './components/task-viewer/TaskViewer';

function App() {
 
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2023, 4, 21),
    },
    {
      id: "T-2",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2023, 7, 24),
    },
    {
      id: "T-3",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-4",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-5",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-6",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
    id: "T-7",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2023, 4, 21),
    },
    {
      id: "T-8",
      name: "Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2023, 7, 24),
    },
    {
      id: "T-9",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-10",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-11",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
    {
      id: "T-12",
      name: "Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2023, 6, 11),
    },
  ];

  return React.createElement(
    'div',
    {
      className: "app-container"
    },
    React.createElement(
      'div',
      {
        className: "app-content"
      },
      React.createElement('h3', {}, "Task Manager"),
      React.createElement(TaskViewer, { taskList: data })
    )
  );
  
  // return (
  //   <div className='app-container'>
  //     <div className="app-content">
  //       <h3>Task Manager</h3>
  //       <TaskViewer taskList={data} />
  //     </div>
  //   </div>
  // );
  
}

export default App;
