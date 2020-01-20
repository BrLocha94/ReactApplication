import React , {useState, useEffect} from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Component = is an function that return and html/javascript/css based code
//             dont put two or more components in the same file
// Proprety = informations that a Father component send to an subordinate one 
//            to use more than one, use <div></div> or <> </>
// State = informations holded by the objects
//         react use the imutability concept: you cant change the value off objects, but you can create new ones
//         to use, import {useState} component from react package

function App() {

  const [ devs, SetDevs ] = useState([]);

  const [ latitude, setLatitude ] = useState('');
  const [ longitude, setLongitude ] = useState('');
  const [ github_username, SetGithubUsername ] = useState('');
  const [ techs, SetTechs ] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');

      SetDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(e){
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    SetGithubUsername('');
    SetTechs('');

    SetDevs([...devs, response.data])
  }

  return (
    <div id = "app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit = {handleAddDev}>
          <div className = "input-block">
            <label htmlFor = "github_username"> Usuário do github</label>
            <input name = "github_username" 
                   id = "github_username" 
                   required
                   value = {github_username}
                   onChange = {e => SetGithubUsername(e.target.value)}>
            </input>
          </div>
          <div className = "input-block">
            <label htmlFor = "techs"> Tecnologias</label>
            <input name = "techs" 
                   id = "techs" 
                   required
                   value = {techs}
                   onChange = {e => SetTechs(e.target.value)}>
            </input>
          </div>
          <div className = "input-group">
            <div className = "input-block">
              <label htmlFor = "latitude"> Latitude</label>
              <input type = "number" 
                     name = "latitude" 
                     id = "latitude" 
                     required 
                     value = {latitude}
                     onChange = {e => setLatitude(e.target.value)}>
              </input>
            </div>
            <div className = "input-block">
              <label htmlFor = "longitude"> Longitude</label>
              <input type = "number"
                     name = "longitude"
                     id = "longitude"
                     required 
                     value = {longitude}
                     onChange = {e => setLongitude(e.target.value)}>
              </input>
            </div>
          </div>

          <button type = "submit"> Salvar </button>

        </form>
      </aside>

      <main>
        <ul>

          {devs.map(dev => (
             <li key = {dev._id} 
                 className = "dev-item">
             <header>
               <img src = {dev.avatar_url} 
                    alt = {dev.name}  />
               <div className = "user-info">
                 <strong>{dev.name}</strong>
                 <span>{dev.techs.join(', ')}</span>
               </div>
             </header>
             <p>{dev.bio}</p>
             <a href = {`https://github.com/${dev.github_username}`}> Acessar perfil github</a>
           </li>
          ))}

        </ul>
      </main>

    </div>
  );
}

export default App;
