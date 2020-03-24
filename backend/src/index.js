//Importação do express (Framework de Node.js)
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());//request em json
app.use(routes);




//Porta do localhost
app.listen(3333);
