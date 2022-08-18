//Want this to be part of the componenets State
/* const tasks = [
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
]; */

import Task from "./Task";


const Tasks = ({tasks}) => {

    return (
    // Example of return a fragment (i.e. empty element)
    <>
      {tasks.map( task => (
        // renders a component instead of an h3
        // key is required for the elements & produce a console error otherwise
        <Task key={task.id} task={task} />
      ))}
    </>
  );

};

export default Tasks;
