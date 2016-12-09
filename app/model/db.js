var config = require('../../knexfile.js');
var env = 'development';
var knex = require('knex')(config[env]);	//Load defualt db by env

module.exports = knex;

//Load current schema
knex.migrate.latest([config]);