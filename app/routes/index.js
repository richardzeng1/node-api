const noteRoutes = require('./notes_routes.js');

module.exports = function(app, db){
    noteRoutes(app, db);
}
