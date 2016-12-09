
exports.up = function(knex, Promise) {
	return knex.schema.createTable('nasdaq', function(table){
		table.primary(['name', 'time']);
		table.string('name').notNullable();
		table.bigInteger('time').notNullable();
		table.float('value').notNullable(); //precision (defaults to 8) and scale (defaults to 2).
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('nasdaq');
};
