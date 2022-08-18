import './App.css';
import Header from './components/Header'    //default React content
import TaskTracker from './components/TaskTracker'; //Traversy content


function App() {
  return (
    <div>
      <Header title="this is passed to the component as a prop with destructured input 
      so 'props' isn't required" />
      <TaskTracker />
    </div>
  );
}

/*  
Make another container with className='container' that goes below 
this to follow Traversy's tutorial with React's default styling 
*/

export default App;
