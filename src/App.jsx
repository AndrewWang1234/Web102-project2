import './App.css';
import {useState} from 'react';
import Study from './Components/Study';
import Quiz from './Components/Quiz'

const App = () => {
  
  const [mode, setMode] = useState("Study");
  

  return (
    <div className="App">
      <h1>US State Capitals Quiz</h1>
      <h4>Do you know your state capitals? Let's find out!</h4>
      <button onClick={() => {setMode("Quiz")}}>Quiz</button>
      <button onClick={() => {setMode("Study")}}>Study</button>
      {mode === "Study" && <Study mode={mode}/>}
      {mode === "Quiz" && <Quiz mode={mode}/>}
    </div>
  )
}

export default App