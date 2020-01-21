import React , {useState, useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Component = is an function that return and html/javascript/css based code
//             dont put two or more components in the same file
// Proprety = informations that a Father component send to an subordinate one 
//            to use more than one, use <div></div> or <> </>
// State = informations holded by the objects
//         react use the imutability concept: you cant change the value off objects, but you can create new ones
//         to use, import {useState} component from react package

function App() {

  const [ devs, SetDevs ] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      SetDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data){

    const response = await api.post('/devs', data);

    SetDevs([...devs, response.data])
  }

  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit = {handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
             <DevItem key = {dev._id} dev = {dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
