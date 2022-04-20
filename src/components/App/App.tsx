import Navbar from '../Navbar/Navbar';
import Task from '../Task/Task';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Task priority='high'/>
      <Task priority='mid' />
      <Task priority='low' />
      <Task />
    </div>
  );
}

export default App;
