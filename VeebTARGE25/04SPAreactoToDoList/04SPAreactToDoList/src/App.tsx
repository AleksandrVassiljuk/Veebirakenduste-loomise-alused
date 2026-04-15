import { useState } from 'react'
import './App.css'


type  ToDo =  {
  id: number; 
  text: string; 
  completed: boolean;
}


// Selgitus arvutile, et tegu on Reacti funktsionaalse komponendiga (aitab vigu vältida).
const App: React.FC = () => {
  const [ToDo, setToDos] = useState<ToDo[]>([]);
  const [newToDo, setNewToDo] = useState('');




//function App() {


  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* To-Do List UI goes here */}
      <div className="input-row">
        <input type="text"
        value={newToDO}
        onChange={e => setNewToDo(e.target.value)}
        placeholder='add a new task'
        onKeyDown={e => e.key === 'enter' && addToDO()}
        />
        <button onClick={addToDO}>Add</button>
      </div>
    </div>
  );
}


export default App
