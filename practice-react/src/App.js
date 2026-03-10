import { useState } from 'react';
import './App.css';


function App() {

  const [state, setState] = useState({count:4, theme:'blue'})
  function decrementCount(){
    setState(prevState=>{
      return {count:prevState.count-1}
    })
  }

  return (
    <>
    <h1 onClick={decrementCount}>
      Click here {state.count} {state.theme}
    </h1>
    </>
  )
}

export default App;
