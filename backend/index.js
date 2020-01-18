const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://admin:<admin>@cluster0-bl4go.mongodb.net/test?retryWrites=true&w=majority',
         { useNewUrlParser: true ,
           useUnifiedTopology: true 
         });

app.use(express.json());

//HTTP methods: GET, POST, PUT, DELETE

// Query params: request.query (Filters, sort, pagination, ...)
// Route params: request.params (Identify an resource on delete or update)
// Body: request.body (Change or create data)

app.post('/users/:id', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello world'});
});

app.listen(3000);