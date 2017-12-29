const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

app.listen(port, ()=>{
    console.log('Live on port ' + port);
});
