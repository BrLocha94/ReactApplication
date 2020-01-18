const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//HTTP methods: GET, POST, PUT, DELETE

// Query params: request.query (Filters, sort, pagination, ...)
// Route params: request.params (Identify an resource on delete or update)
// Body: request.body (Change or create data)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;