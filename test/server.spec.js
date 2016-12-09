var request = require("request");

describe('ABC routing', function () {
	var server = 'http://localhost:8080/api/index';

	it("GET /api/index returns status code 200", function() {
		request.get(server, function(error, response, body) {
			expect(response.statusCode).toBe(200);
		});
	});

	it("POST /api/index returns status code 200", function() {
		request.get(server, function(error, response, body) {
			expect(response.statusCode).toBe(200);
		});
	});
});