import React , {useState} from 'react';

// Component = is an function that return and html/javascript/css based code
//             dont put two or more components in the same file
// Proprety = informations that a Father component send to an subordinate one 
//            to use more than one, use <div></div> or <> </>
// State = informations holded by the objects
//         react use the imutability concept: you cant change the value off objects, but you can create new ones
//         to use, import {useState} component from react package

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
      setCounter(counter + 1);
  }

  return (
    <>
      <h1> contador = {counter} </h1>
      <button onClick = {incrementCounter} > Incrementar </button>
    </>
  );
}

export default App;
