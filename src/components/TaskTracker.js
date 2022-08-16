import Button from "./Button";

const onClick = () => {
    console.log('click!');
};

const TaskTracker = () => {
  return (
    <div className="container">

      <div className="header">
          <h1>Task Tracker</h1>
          <Button color='green' text='Add' onClick={onClick}/>
          {/* Example of resuable component with different props */}
          {/* <Button color='red' text='Remove' />  */}
      </div>

    </div>
  );
};

export default TaskTracker;
