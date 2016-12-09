var rest = require('restler');

var url = 'http://www.nasdaq.com/aspx/IndexData.ashx';

var storeScrapeData = function (db, index, data) {
	for (var i=0; i<data.data.length; i++) {
		insertIndexValue(db, index, data.data[i]);
	}
};

var insertIndexValue = function (db, index, item) {
	db('nasdaq').where({name: index, time: item.x}).then(function (row){
		if (row.length > 0) {
			db('nasdaq').where({name: index, time: item.x}).update({value: item.y});
		} else {
			db.insert({name: index, time: item.x, value: item.y}).into('nasdaq').then(function(id) {
				console.log(id);
			})
		}
	});
};

var quaryIndexValue = function (db, index, callback) {
	db('nasdaq').where({name: index}).then(function (result) {
		callback(result);
	});
}

module.exports = function () {
	var indexService = {
		scrapeIndexValue: function (db, callback) {
			console.log('Parsing index value.......');
			rest.post(url, {
				parser: rest.parsers.json,
				data: { index: 'ixic' }
			}).on('success', function (result, res) {
				if (res && res.statusCode !== 200) {
					console.log('Parsing index value: ERROR');
					callback('Error');
				} else {
					console.log('Parsing index value: SUCCESS');

					storeScrapeData(db, 'ixic', result);
					callback('SUCCESS');
				}
			}).on('error', function (error, res) {
				console.log('Parsing index value: ERROR');
				callback('Error');
			});
		},

		getIndexValue: function (db, callback) {
			quaryIndexValue(db, 'ixic', callback);
		}
		
	};

	return indexService;
}