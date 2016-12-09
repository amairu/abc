var indexService = require('../app/indexService')(); //define service
var config = require('../knexfile.js');
var db = require('knex')(config['test']); //define db

describe('ABC Index Service', function () {

	beforeEach( function(){
		db.migrate.latest([config]);
	});

	it("get Index value should return Array", function(done) {
		indexService.getIndexValue(db, function (result) {
			expect(result).toEqual(jasmine.any(Array))
			done();
		});
	});

});