const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const port = 8000;
const db = require('./config/db');

const app = express();
// Using body parser to parse HTTP requests since express cannot handle
// HTTP requests.
app.use(bodyParser.urlencoded({extended:true}));


MongoClient.connect(db.url, (err, database)=>{
    if (err) return console.log(err);
    // Specifying routes.
    require('./app/routes')(app, {});

    // Listening on port 8000
    app.listen(port, ()=>{
        console.log('Live on port ' + port);
    });

});
