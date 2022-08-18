import Button from "./Button";
import Tasks from "./Tasks";
import { useState } from "react"; // this is a react hook



const onClick = () => {
    console.log('click!');
};

const TaskTracker = () => {

    // part of app state
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: 'Feb 5th at 2:30pm',
          reminder: true
      }, 
      {
          id: 2,
          text: 'Meeting at school',
          day: 'Feb 6th at 1:30pm',
          reminder: true
      }, 
      {
          id: 3,
          text: 'Food shopping',
          day: 'Feb 5th at 2:30pm',
          reminder: false
      }
    ])

  return (
    <div className="container">

      <div className="header">
          <h1>Task Tracker</h1>
          <Button color='green' text='Add' onClick={onClick}/>
          {/* Example of resuable component with different props */}
          {/* <Button color='red' text='Remove' />  */}
      </div>

      {/* Passing state down as a prop */}
      <Tasks tasks={tasks} />

    </div>
  );
};

export default TaskTracker;
