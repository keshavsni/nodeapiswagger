require('dotenv').config();

const express = require('express');
const swaggerUi = require("swagger-ui-express");
let swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

let port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})