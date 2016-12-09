
exports.up = function(knex, Promise) {
	return knex.schema.createTable('index', function(table){
		table.increments();
		table.string('name').notNullable().unique();
		table.string('time').notNullable();
		table.float('value').notNullable(); //precision (defaults to 8) and scale (defaults to 2).
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('index');
};
