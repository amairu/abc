var request = require("request");
var server = 'http://localhost:8080/api/index';

describe('ABC routing', function () {
	

	describe("GET /api/index", function() {
		it("returns status code 200", function(done) {
			request.get(server, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
	
	describe("POST /api/index", function() {
		it("returns status code 200", function(done) {
			request.get(server, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});
	
});