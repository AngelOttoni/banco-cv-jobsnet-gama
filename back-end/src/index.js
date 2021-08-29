const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();
const cors = require('cors');


mongoose.connect('mongodb+srv://dbJobsNet:dbJobsNet@cluster0.b7ss1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(process.env.PORT || 3000, () => {
    console.log('App rodando na porta 3000');
});