const { Router } = require('express');
const axios = require("axios");
const Dev = require('./models/Dev');

const routes = Router();

//HTTP methods: GET, POST, PUT, DELETE

// Query params: request.query (Filters, sort, pagination, ...)
// Route params: request.params (Identify an resource on delete or update)
// Body: request.body (Change or create data)

routes.post('/devs', async (request, response) => {
    
    const { github_username, techs, latitude, longitude} = request.body;
    const gitResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    //console.log(request.body);
    const{ name = login, avatar_url, bio} = gitResponse.data;
    //console.log(name, avatar_url, bio); 
    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: {longitude, latitude},
    };

    const dev = await Dev.create({
        name,
        github_username,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });

    return response.json(dev);
});

module.exports = routes;