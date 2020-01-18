const { Router } = require('express');
const axios = require("axios");

const routes = Router();

//HTTP methods: GET, POST, PUT, DELETE

// Query params: request.query (Filters, sort, pagination, ...)
// Route params: request.params (Identify an resource on delete or update)
// Body: request.body (Change or create data)

routes.post('/devs', async (request, response) => {
    const { githubUserName } = request.body;

    const gitResponse = await axios.get(`https://api.github.com/users/${githubUserName}`);

    console.log(request.body);
    console.log(gitResponse.data);

    return response.json({ message: 'Hello world'});
});

module.exports = routes;