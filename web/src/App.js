import React , {useState} from 'react';

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

  return (
    <div id = "app">

      <aside>
        <strong>Cadastrar</strong>
        <form>
          
          <div className = "input-block">
            <label htmlFor = "github_username"> Usuário do github</label>
            <input name = "github_username" id = "github_username" required></input>
          </div>

          <div className = "input-block">
            <label htmlFor = "techs"> Tecnologias</label>
            <input name = "techs" id = "techs" required></input>
          </div>
          
          <div className = "input-group">
            <div className = "input-block">
              <label htmlFor = "latitude"> Latitude</label>
              <input name = "latitude" id = "latitude" required></input>
            </div>

            <div className = "input-block">
              <label htmlFor = "longitude"> Longitude</label>
              <input name = "longitude" id = "longitude" required></input>
            </div>
          </div>

          <button type = "submit"> Salvar </button>

        </form>
      </aside>

      <main>
        <ul>
          <li className = "dev-item">
            <header>
              <img src = "https://avatars3.githubusercontent.com/u/23144346?s=460&v=4" alt = "Bruno Locha" />
              <div className = "user-info">
                <strong>Bruno Locha</strong>
                <span>Unity, Java, C#</span>
              </div>
            </header>
            <p>Computer Science student at UFF(Federal Fluminense University)</p>
            <a href = "https://github.com/BrLocha94"> Acessar perfil github</a>
          </li>
          
          <li className = "dev-item">
            <header>
              <img src = "https://avatars3.githubusercontent.com/u/23144346?s=460&v=4" alt = "Bruno Locha" />
              <div className = "user-info">
                <strong>Bruno Locha</strong>
                <span>Unity, Java, C#</span>
              </div>
            </header>
            <p>Computer Science student at UFF(Federal Fluminense University)</p>
            <a href = "https://github.com/BrLocha94"> Acessar perfil github</a>
          </li>

          <li className = "dev-item">
            <header>
              <img src = "https://avatars3.githubusercontent.com/u/23144346?s=460&v=4" alt = "Bruno Locha" />
              <div className = "user-info">
                <strong>Bruno Locha</strong>
                <span>Unity, Java, C#</span>
              </div>
            </header>
            <p>Computer Science student at UFF(Federal Fluminense University)</p>
            <a href = "https://github.com/BrLocha94"> Acessar perfil github</a>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;
