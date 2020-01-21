import React, {useState, useEffect} from 'react';

function DevForm({ onSubmit }){

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

    async function handleSubmit(e){

        e.preventDefault();

       await onSubmit({
           github_username,
           techs,
           latitude,
           longitude,
       });

       SetGithubUsername('');
       SetTechs('');
    }

    return(
        <form onSubmit = {handleSubmit}>
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
    );
};

export default DevForm;